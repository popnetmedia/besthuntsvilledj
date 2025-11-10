# Holistic SEO Audit Process Template
## Based on Koray Tuğberk GÜBÜR's Methodology

**Last Updated:** November 8, 2025
**Version:** 1.0

---

## Overview

This document outlines the step-by-step process for conducting comprehensive Holistic SEO audits on review pages, brand pages, and content pages using Koray Tuğberk GÜBÜR's methodology and semantic SEO principles.

---

## Audit Process Workflow

### Phase 1: Pre-Audit Preparation (15-30 minutes)

1. **Read the Holistic SEO Framework**
   - Review `/holistic-seo-review-framework.md`
   - Refresh understanding of:
     - The 41 Rules
     - Entity-Attribute-Value (EAV) architecture
     - User intent layers
     - Schema requirements
     - E-E-A-T signals

2. **Read the Page Being Audited**
   - Complete read of the target page source code
   - Note current structure, sections, schemas
   - Identify page type (review, comparison, guide, etc.)

3. **Define Audit Scope**
   - Primary keyword/topic
   - Target search intent
   - Competitor pages to benchmark against
   - Desired outcomes (ranking position, traffic goals)

---

### Phase 2: Entity Coverage Audit (30-45 minutes)

**Checklist:**

#### Primary Entity
- [ ] Entity name clearly defined
- [ ] All required attributes covered (15+ minimum)
- [ ] Quantitative attributes included (numbers, measurements, dates)
- [ ] Qualitative attributes included (descriptions, features)
- [ ] Historical attributes (founding, milestones)
- [ ] Relational attributes (ownership, partnerships)
- [ ] Missing attributes identified and documented

**EAV Completeness Score:** __%
- Calculate: (Attributes Covered / Total Relevant Attributes) × 100
- Target: 70%+ for comprehensive coverage

#### Related Entities (Competitors/Alternatives)
- [ ] Minimum 3-5 direct competitors covered
- [ ] Each competitor has detailed comparison
- [ ] Attributes compared across competitors (8-12 minimum)
- [ ] Winner declarations with reasoning
- [ ] Trade-off discussions included

**Competitor Coverage Score:** __%
- Calculate: (Competitors Covered / Industry Leaders) × 100
- Target: 60%+ (3-5 of top competitors)

#### Supporting Entities
- [ ] Industry organizations mentioned
- [ ] Related technologies/platforms covered
- [ ] Third-party services (insurance, roadside, etc.)
- [ ] Geographic entities (locations, coverage areas)
- [ ] Review platforms/data sources cited
- [ ] Payment processors/methods mentioned

---

### Phase 3: Semantic Completeness Audit (45-60 minutes)

#### Question Coverage Analysis

**What Questions:**
- [ ] What is [product/service]?
- [ ] What does it do?
- [ ] What are the features?
- [ ] What's included?
- [ ] What makes it different?
- [ ] What are the specifications?

**How Questions:**
- [ ] How does it work?
- [ ] How does it compare to alternatives?
- [ ] How much does it cost?
- [ ] How do you use it?
- [ ] How do you cancel/return?
- [ ] How do you resolve issues?

**Why Questions:**
- [ ] Why choose this over alternatives?
- [ ] Why does it cost what it costs?
- [ ] Why is it designed this way?
- [ ] Why would someone need it?

**When Questions:**
- [ ] When should you use it?
- [ ] When is it available?
- [ ] When should you book/buy?
- [ ] When is peak season?
- [ ] When do payments process?
- [ ] When should you upgrade?

**Where Questions:**
- [ ] Where can you buy/rent?
- [ ] Where is it made/headquartered?
- [ ] Where do you pick up/receive?
- [ ] Where is customer service?

**Who Questions:**
- [ ] Who is it for?
- [ ] Who makes it?
- [ ] Who should avoid it?
- [ ] Who are the competitors?

**Question Coverage Score:** __/10
- 9-10: All question types comprehensively covered
- 7-8: Most questions covered, minor gaps
- 5-6: Several question types missing
- 3-4: Major gaps in question coverage
- 0-2: Critical failures in semantic completeness

#### User Intent Layers

**Layer 1: Informational Discovery**
- [ ] What is it? (definition)
- [ ] Feature explanations
- [ ] How it works
- [ ] Background information

**Score:** __/10

**Layer 2: Commercial Investigation**
- [ ] Comparison with alternatives
- [ ] Pros and cons analysis
- [ ] Price evaluation
- [ ] Feature comparison
- [ ] Expert assessment

**Score:** __/10

**Layer 3: Transactional Preparation**
- [ ] Where to buy/rent
- [ ] Current pricing
- [ ] Availability information
- [ ] Purchase considerations
- [ ] Warranty/returns

**Score:** __/10

**Layer 4: Post-Purchase Support**
- [ ] How to use/setup
- [ ] Maintenance information
- [ ] Troubleshooting guides
- [ ] Optimization tips

**Score:** __/10

**Overall Intent Coverage Score:** __/10

---

### Phase 4: Schema.org Markup Audit (30-45 minutes)

**Review Pages Should Have:**

#### Required Schemas:
- [ ] **Review Schema** - Main review markup
  - itemReviewed (Product/Service/Organization)
  - reviewRating
  - author (Person with full E-E-A-T properties)
  - publisher
  - datePublished
  - dateModified
  - reviewBody

- [ ] **FAQPage Schema** - If FAQs present
  - mainEntity array
  - Question type for each
  - acceptedAnswer for each
  - 30-40 word extractive answers

- [ ] **Pros/Cons Structured Data**
  - positiveNotes ItemList
  - negativeNotes ItemList

- [ ] **Article Schema** - Separate from Review
  - headline
  - author (with hasOccupation, knowsAbout)
  - datePublished
  - dateModified
  - articleBody or wordCount

- [ ] **AggregateRating** - If applicable
  - ratingValue
  - reviewCount
  - bestRating
  - worstRating

#### Optional But Recommended:
- [ ] **HowTo Schema** - For process sections
- [ ] **Breadcrumb Schema** - Navigation
- [ ] **Organization Schema** - For publisher
- [ ] **Product/Service Schema** - If reviewing product

**Schema Implementation Score:** __/10
- 10: All required + optional schemas present and validated
- 7-9: All required schemas, some optional missing
- 4-6: Some required schemas missing
- 0-3: Critical schema gaps

**Schema Validation:**
- [ ] Validated with Google Rich Results Test
- [ ] Validated with Schema.org validator
- [ ] No errors or warnings

---

### Phase 5: Content Structure Audit (30 minutes)

#### Macro Context Clarity
- [ ] ONE clear topic per page
- [ ] Title reinforces macro context
- [ ] H1 is clear and optimized
- [ ] All sections support main topic
- [ ] No context dilution

**Macro Context Score:** __/10

#### Heading Hierarchy

**H1:**
- [ ] Single H1 present
- [ ] Clear and optimized
- [ ] Matches primary keyword intent

**H2 Structure:**
- [ ] H2s formatted as questions (Koray requirement)
- [ ] Questions are 15 words or fewer
- [ ] Each has 30-40 word extractive answer
- [ ] Logical flow and organization
- [ ] Cover user search queries

**H3-H6 Structure:**
- [ ] Proper nesting (no skipped levels)
- [ ] Descriptive and helpful
- [ ] Support parent heading topics

**Heading Score:** __/10

#### Contextual Bridges
- [ ] Smooth transitions between sections
- [ ] Related topics linked naturally
- [ ] Internal links as bridges (minimum 3)
- [ ] Semantic connections clear

**Contextual Bridge Score:** __/10

#### Information Gain
- [ ] Unique information not found elsewhere
- [ ] Original analysis or research
- [ ] First-hand experience evidence
- [ ] Specific quantitative measurements
- [ ] Proprietary data or insights
- [ ] Detailed scenarios and examples

**Information Gain Score:** __/10

---

### Phase 6: E-E-A-T Signals Audit (45 minutes)

#### Experience Signals

**Visual Evidence:**
- [ ] 8-12 original images minimum
- [ ] Photos of product/service
- [ ] Screenshots of process/interface
- [ ] Infographics or charts
- [ ] Videos (if applicable)

**Images Present:** __ / 12
**Image Score:** __/10

**Measurable Evidence:**
- [ ] Specific numbers and measurements
- [ ] Dates and timeframes
- [ ] Costs and prices (exact)
- [ ] Quantities and dimensions
- [ ] Performance metrics

**Measurements Count:** __
**Measurable Evidence Score:** __/10

**Narrative Evidence:**
- [ ] Time-based observations
- [ ] Specific people/places named
- [ ] Detailed scenarios described
- [ ] Problem-solving examples
- [ ] Personal anecdotes

**Narrative Evidence Score:** __/10

**Overall Experience Score:** __/10

#### Expertise Signals

**Author Credentials:**
- [ ] Name and title
- [ ] Years of experience
- [ ] Specific qualifications
- [ ] Industry certifications
- [ ] Professional affiliations
- [ ] Publication history

**Schema Implementation:**
- [ ] hasOccupation structured object
- [ ] knowsAbout field
- [ ] worksFor organization
- [ ] alumniOf (if applicable)
- [ ] memberOf organizations

**Expertise Score:** __/10

#### Authoritativeness Signals

**External Validation:**
- [ ] Citations to authoritative sources
- [ ] Data from reputable studies
- [ ] Expert quotes or endorsements
- [ ] Industry association references
- [ ] Third-party verification

**Internal Authority:**
- [ ] Links to related content
- [ ] Topical cluster structure
- [ ] Pillar page connection
- [ ] Supporting how-to guides

**Authoritativeness Score:** __/10

#### Trustworthiness Signals

**Transparency:**
- [ ] Clear affiliate disclosure
- [ ] Balanced pros and cons
- [ ] Update dates displayed
- [ ] Author byline visible
- [ ] Contact information available
- [ ] Correction policy mentioned

**Factual Accuracy:**
- [ ] Verifiable claims
- [ ] Source citations
- [ ] No exaggerations
- [ ] Data points accurate
- [ ] Claims supported by evidence

**Trustworthiness Score:** __/10

**Overall E-E-A-T Score:** __/10

---

### Phase 7: Topical Authority Audit (30 minutes)

#### Content Depth
- [ ] Word count: 2,500+ for reviews, 3,000+ for comparisons
- [ ] 15+ attributes covered in depth
- [ ] Both quantitative and qualitative attributes
- [ ] Use cases structured and detailed

**Content Depth Score:** __/10

#### Semantic Saturation
- [ ] Industry terminology used correctly
- [ ] Related concepts covered
- [ ] Synonym variations present
- [ ] Technical specifications included
- [ ] User language incorporated
- [ ] No keyword stuffing

**Semantic Saturation Score:** __/10

#### Internal Linking
- [ ] Minimum 3 contextual internal links
- [ ] Links to related reviews/comparisons
- [ ] Links to city/location pages
- [ ] Links to guides and resources
- [ ] Pillar page connection
- [ ] Anchor text optimized

**Internal Links Present:** __
**Internal Linking Score:** __/10

#### Supporting Content Assessment
- [ ] Pillar page exists
- [ ] Related reviews available
- [ ] Supporting guides present
- [ ] Comparison pages linked
- [ ] Content cluster structure evident

**Supporting Content Score:** __/10

**Overall Topical Authority Score:** __/10

---

### Phase 8: Pros/Cons Audit (15 minutes)

#### Pros Section
- [ ] Minimum 3 pros (5-8 ideal)
- [ ] Specific and detailed
- [ ] Evidence-based claims
- [ ] Explains why each is beneficial
- [ ] Provides comparison context

**Pros Count:** __
**Pros Quality Score:** __/10

#### Cons Section
- [ ] Minimum 2 cons (3-8 ideal)
- [ ] Meaningful limitations (not trivial)
- [ ] Specific impact described
- [ ] Evidence provided
- [ ] Severity assessed

**Cons Count:** __
**Cons Quality Score:** __/10

#### Balance
- [ ] Roughly equal pros and cons
- [ ] Trade-offs explained
- [ ] Honest assessment
- [ ] Comparison context provided
- [ ] Use case recommendations

**Balance Score:** __/10

#### Structured Data
- [ ] positiveNotes ItemList schema
- [ ] negativeNotes ItemList schema
- [ ] Properly formatted and validated

**Pros/Cons Schema Score:** __/10

**Overall Pros/Cons Score:** __/10

---

### Phase 9: FAQ Audit (20 minutes)

#### FAQ Quantity
- [ ] 15-20 FAQs minimum for comprehensive coverage
- [ ] Covers all user intent layers
- [ ] Addresses common objections
- [ ] Includes comparison questions

**FAQ Count:** __

#### Question Types Covered
- [ ] Pre-purchase questions
- [ ] Technical questions
- [ ] Purchase process questions
- [ ] Usage questions
- [ ] Problem-solving questions
- [ ] Comparison questions
- [ ] Demographic questions
- [ ] Geographic questions

**Question Type Coverage:** __/10

#### Answer Quality
- [ ] Answers are 30-40 words for schema (extractive)
- [ ] Factual, not opinion-based
- [ ] Complete thoughts
- [ ] Standalone meaning
- [ ] Direct and specific

**Answer Quality Score:** __/10

#### FAQ Schema Implementation
- [ ] FAQPage schema present
- [ ] mainEntity array complete
- [ ] Question type for each
- [ ] acceptedAnswer for each
- [ ] Validated with Rich Results Test

**FAQ Schema Score:** __/10

**Overall FAQ Score:** __/10

---

### Phase 10: Comparison Audit (20 minutes)

#### Competitors Compared
- [ ] Minimum 3-5 direct competitors
- [ ] Each with detailed comparison
- [ ] Trade-off discussions
- [ ] Winner declarations with reasoning

**Competitors Compared:** __
**Competitor Coverage Score:** __/10

#### Comparison Attributes
- [ ] 8-12 attributes in comparison table
- [ ] Standardized comparison matrix
- [ ] Quantitative and qualitative attributes
- [ ] Pricing comparison included
- [ ] Feature comparison detailed

**Attributes Compared:** __
**Attribute Coverage Score:** __/10

#### Comparison Depth
- [ ] Prose comparison analysis
- [ ] Use case recommendations
- [ ] Scenario-based comparisons
- [ ] Trade-off discussions
- [ ] Clear winner declarations

**Comparison Depth Score:** __/10

**Overall Comparison Score:** __/10

---

### Phase 11: Koray's 41 Rules Compliance (30 minutes)

#### Word Order Optimization
- [ ] Clear and direct sentences
- [ ] No unnecessary delays to answers
- [ ] Proper sentence structure
- [ ] Optimized for comprehension

**Word Order Score:** __/10

#### Certainty & Factuality
- [ ] Precise information
- [ ] Facts distinguished from opinions
- [ ] Opinion modifiers removed ("will," "should," "need to," "have to")
- [ ] Accurate data and examples
- [ ] Trust-building factual statements

**Certainty Score:** __/10

**Opinion Modifiers to Remove:**
- Document all instances of "should," "will," "need to," "have to"
- List line numbers for each occurrence

#### Context Management
- [ ] One macro context per page
- [ ] No context dilution
- [ ] Contextual relevance maintained
- [ ] Semantic coherence throughout

**Context Management Score:** __/10

#### Semantic Relevance
- [ ] Relevant entities incorporated
- [ ] Contextually appropriate terms
- [ ] Factual accuracy maintained
- [ ] Relational relevance clear

**Semantic Relevance Score:** __/10

**Overall Koray Compliance Score:** __/10

---

## Phase 12: Prioritized Recommendations (30-45 minutes)

### Scoring and Prioritization

For each identified issue/gap, assign:
- **Impact Score:** 1-10 (SEO impact)
- **Effort Score:** Low/Medium/High
- **Priority:** Critical/High/Medium/Low

### Recommendation Template

```
## Recommendation #[number]: [Title]

**Impact:** __/10
**Effort:** Low/Medium/High (estimated hours)
**Priority:** 🔴 Critical / 🟠 High / 🟡 Medium / 🟢 Low

**Why:** [Explanation of SEO impact and importance]

**Action:** [Specific steps to implement]

**Expected Result:** [Measurable outcome]

**Dependencies:** [Other recommendations that should be done first]
```

### Priority Levels

**🔴 CRITICAL (Implement Immediately - Within 24-48 hours):**
- Schema gaps (FAQPage, Pros/Cons)
- Internal linking failures (0-1 links)
- Major E-E-A-T gaps
- Critical framework violations

**🟠 HIGH PRIORITY (Implement Within 1 Week):**
- Missing competitor coverage
- Heading structure issues
- Visual evidence gaps
- Supporting schema implementations

**🟡 MEDIUM PRIORITY (Implement Within 2 Weeks):**
- Use case structure
- FAQ answer optimization
- Additional entity coverage
- Semantic saturation improvements

**🟢 LOW PRIORITY (Implement Within 1 Month):**
- Video additions
- Infographics
- Related searches section
- Update history/changelog

---

## Final Audit Report Template

### Executive Summary

**Overall Score:** __/10

**Page:** [URL or file path]
**Primary Keyword:** [target keyword]
**Audit Date:** [date]
**Auditor:** [name]

**Quick Assessment:**
- ✅ Strengths (top 3-5)
- ⚠️ Needs Improvement (top 3-5)
- ❌ Critical Gaps (top 3-5)

### Scorecard Summary

| Audit Category | Score | Status |
|----------------|-------|--------|
| Entity Coverage | __/10 | ✅/⚠️/❌ |
| Semantic Completeness | __/10 | ✅/⚠️/❌ |
| Schema.org Markup | __/10 | ✅/⚠️/❌ |
| Content Structure | __/10 | ✅/⚠️/❌ |
| E-E-A-T Signals | __/10 | ✅/⚠️/❌ |
| Topical Authority | __/10 | ✅/⚠️/❌ |
| Pros/Cons | __/10 | ✅/⚠️/❌ |
| FAQ | __/10 | ✅/⚠️/❌ |
| Comparison | __/10 | ✅/⚠️/❌ |
| Koray's 41 Rules | __/10 | ✅/⚠️/❌ |
| Internal Linking | __/10 | ✅/⚠️/❌ |
| Visual Evidence | __/10 | ✅/⚠️/❌ |

**Legend:**
- ✅ 8-10: Excellent
- ⚠️ 5-7: Needs Improvement
- ❌ 0-4: Critical Gap

### Top 10-20 Recommendations

List prioritized recommendations with:
1. Impact and effort scores
2. Specific action items
3. Expected outcomes
4. Implementation timeline

### Expected Results

**With Priority 1 Implementations:**
- Estimated ranking improvement: __%
- Timeline: [weeks/months]
- Traffic impact: [estimated increase]

**With Full Implementation:**
- Estimated ranking improvement: __%
- Timeline: [weeks/months]
- Traffic impact: [estimated increase]

---

## Audit Workflow Summary

1. **Pre-Audit Preparation** (15-30 min)
2. **Entity Coverage Audit** (30-45 min)
3. **Semantic Completeness Audit** (45-60 min)
4. **Schema.org Markup Audit** (30-45 min)
5. **Content Structure Audit** (30 min)
6. **E-E-A-T Signals Audit** (45 min)
7. **Topical Authority Audit** (30 min)
8. **Pros/Cons Audit** (15 min)
9. **FAQ Audit** (20 min)
10. **Comparison Audit** (20 min)
11. **Koray's 41 Rules Compliance** (30 min)
12. **Prioritized Recommendations** (30-45 min)

**Total Audit Time:** 5-7 hours for comprehensive audit

---

## Tools & Resources

**Schema Validation:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

**SEO Analysis:**
- Google Search Console
- Screaming Frog SEO Spider
- Ahrefs/SEMrush for competitor analysis

**Content Analysis:**
- Word count tools
- Readability analyzers
- Heading hierarchy checkers

**Koray's Framework:**
- Holistic SEO & Digital: https://www.holisticseo.digital/
- Topical Authority Guide: https://www.holisticseo.digital/pagespeed/topical-authority/

---

## Version History

- **v1.0** (November 8, 2025): Initial audit process template based on RVshare review audit

---

**END OF AUDIT PROCESS TEMPLATE**
