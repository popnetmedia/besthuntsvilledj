# Best Huntsville DJs

A DJ services in Huntsville, AL comparison and review website.

## Tech Stack

- Astro v5.15.3 (Static Site Generator)
- Vanilla CSS (No framework)
- AI-generated images
- Schema.org structured data

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable components (Navigation, etc.)
├── layouts/         # Page layouts (BaseLayout)
├── pages/
│   ├── cities/      # City-specific pages
│   ├── reviews/     # Detailed review pages
│   └── index.astro  # Homepage
├── styles/          # CSS files
└── utils/           # Utilities (schema generators, links)

public/
└── images/          # Static images
```

## Content Creation Workflow

1. Copy `src/pages/cities/_TEMPLATE.astro`
2. Update city data object
3. Generate images: `node scripts/generate-images.js`
4. Review and commit

## Deployment

See DEPLOYMENT_GUIDE.md for full instructions.

## Next Steps

1. Follow SETUP_GUIDE.md
2. Create your first city page
3. Set up hosting (Netlify/Vercel)
4. Configure domain
5. Add Google Analytics
6. Launch!
