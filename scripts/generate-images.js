#!/usr/bin/env node

/**
 * Smart Image Generation Script
 * Generates images from IMAGE_QUEUE.json using Ideogram API
 * Only generates images that don't already exist
 * Moves completed images from pending to completed
 */

import 'dotenv/config';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IDEOGRAM_API_KEY = process.env.IDEOGRAM_API_KEY;
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const QUEUE_FILE = path.join(__dirname, '..', 'IMAGE_QUEUE.json');

// Configuration
const BATCH_LIMIT = process.argv[2] ? parseInt(process.argv[2]) : 5; // Default: 5 images per run
const DELAY_BETWEEN_REQUESTS = 5000; // 5 seconds (conservative for rate limits)

async function generateImage(imageSpec) {
  console.log(`\n🎨 Generating: ${imageSpec.filename}`);
  console.log(`   Alt: ${imageSpec.alt}`);
  console.log(`   Page: ${imageSpec.page}`);

  try {
    const response = await axios.post(
      'https://api.ideogram.ai/generate',
      {
        image_request: {
          prompt: imageSpec.prompt,
          aspect_ratio: imageSpec.size,
          model: 'V_2',
          magic_prompt_option: 'AUTO'
        }
      },
      {
        headers: {
          'Api-Key': IDEOGRAM_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.data && response.data.data.length > 0) {
      const imageUrl = response.data.data[0].url;

      // Download the image
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(imageResponse.data, 'binary');

      // Save to output directory
      const outputPath = path.join(OUTPUT_DIR, imageSpec.filename);
      fs.writeFileSync(outputPath, buffer);

      console.log(`   ✅ Saved successfully`);
      return { success: true, spec: imageSpec };
    } else {
      throw new Error('No image data in response');
    }
  } catch (error) {
    console.error(`   ❌ Failed: ${error.message}`);
    if (error.response) {
      console.error(`   API Response: ${JSON.stringify(error.response.data)}`);
    }
    return { success: false, spec: imageSpec, error: error.message };
  }
}

async function main() {
  console.log('🎨 BestRV Smart Image Generation');
  console.log('=================================\n');

  // Check API key
  if (!IDEOGRAM_API_KEY || IDEOGRAM_API_KEY === 'your_api_key_here') {
    console.error('❌ Error: IDEOGRAM_API_KEY not set in .env file\n');
    console.error('Please:');
    console.error('1. Open .env file in your project root');
    console.error('2. Replace "your_api_key_here" with your actual Ideogram API key');
    console.error('3. Save the file and run this script again\n');
    process.exit(1);
  }

  // Check output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    console.log(`📁 Creating output directory: ${OUTPUT_DIR}`);
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Load queue
  if (!fs.existsSync(QUEUE_FILE)) {
    console.error(`❌ Error: IMAGE_QUEUE.json not found at ${QUEUE_FILE}\n`);
    process.exit(1);
  }

  const queueData = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));
  const pending = queueData.pending || [];
  const completed = queueData.completed || [];

  console.log(`📋 Queue Status:`);
  console.log(`   Pending: ${pending.length} images`);
  console.log(`   Completed: ${completed.length} images`);
  console.log(`   Batch Limit: ${BATCH_LIMIT} images per run\n`);

  // Filter out images that already exist
  const toGenerate = pending.filter(spec => {
    const outputPath = path.join(OUTPUT_DIR, spec.filename);
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipping ${spec.filename} (already exists)`);
      // Move to completed
      completed.push({
        ...spec,
        generated_at: new Date().toISOString(),
        status: 'already_existed'
      });
      return false;
    }
    return true;
  });

  // Update pending list (remove already existing)
  queueData.pending = toGenerate;
  queueData.completed = completed;

  if (toGenerate.length === 0) {
    console.log('\n✨ All images already generated! Queue is empty.\n');
    fs.writeFileSync(QUEUE_FILE, JSON.stringify(queueData, null, 2));
    return;
  }

  // Limit batch size
  const batch = toGenerate.slice(0, BATCH_LIMIT);

  console.log(`\n🚀 Generating ${batch.length} image(s)...\n`);
  console.log(`⏱️  Estimated time: ~${Math.ceil(batch.length * (DELAY_BETWEEN_REQUESTS / 1000))} seconds\n`);
  console.log(`💰 Estimated cost: $${(batch.length * 0.08).toFixed(2)}\n`);

  const results = [];

  // Generate images one at a time
  for (let i = 0; i < batch.length; i++) {
    const spec = batch[i];
    console.log(`\n[${i + 1}/${batch.length}] Processing ${spec.filename}...`);

    const result = await generateImage(spec);
    results.push(result);

    if (result.success) {
      // Move from pending to completed
      const completedSpec = {
        ...spec,
        generated_at: new Date().toISOString(),
        status: 'success'
      };
      delete completedSpec.prompt; // Remove prompt after successful generation

      queueData.completed.push(completedSpec);
      queueData.pending = queueData.pending.filter(p => p.filename !== spec.filename);
    }

    // Wait between requests (except after last one)
    if (i < batch.length - 1) {
      console.log(`\n⏳ Waiting ${DELAY_BETWEEN_REQUESTS / 1000} seconds before next request...`);
      await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
    }
  }

  // Save updated queue
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(queueData, null, 2));

  // Summary
  console.log('\n\n📊 Generation Summary');
  console.log('=====================');
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  console.log(`✅ Successful: ${successful}/${batch.length}`);
  console.log(`❌ Failed: ${failed}/${batch.length}`);
  console.log(`📋 Remaining in queue: ${queueData.pending.length}`);

  if (failed > 0) {
    console.log('\n❌ Failed images:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   - ${r.spec.filename}: ${r.error}`);
    });
  }

  if (queueData.pending.length > 0) {
    console.log(`\n💡 Tip: Run the script again to generate the next batch of ${Math.min(BATCH_LIMIT, queueData.pending.length)} image(s)`);
    console.log(`   Or specify a different batch size: node scripts/generate-images.js 3`);
  }

  console.log(`\n✅ Queue updated! Prompts removed from completed images.`);
  console.log(`📁 Images saved to: ${OUTPUT_DIR}\n`);
}

// Run main function
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
