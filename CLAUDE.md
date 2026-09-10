# Cahaya Selatan Kreasindo — Project Instructions
## 1. Project

This repository contains the website for **Cahaya Selatan Kreasindo (CSK)**.

CSK is a B2B advertising production and visual merchandising company. The business handles physical/custom production needs for brands, events, retail, exhibitions, activations, and other commercial projects.

The website is intended to function as a **digital showroom**, not merely a company profile.

The website should help visitors:

1. Understand what CSK can produce.
2. Discover products and capabilities they may need.
3. See real production results through portfolio/project examples.
4. Imagine their own project being produced by CSK.
5. Gain confidence in CSK's production capability.
6. Contact CSK when they are ready to discuss a project.

Do not narrow CSK into only one product category such as exhibition booths.

---

## 2. Core Business Positioning

CSK can handle a broad range of physical production and visual merchandising needs, from smaller event/branding items to larger custom projects.

Examples include:

* Exhibition booths
* Display racks
* Retail displays
* Signage
* Neon boxes
* Branding materials
* POSM
* Event production needs
* Custom displays
* Custom furniture/display structures
* Merchandise and supporting event materials
* Other custom production according to project requirements

The common capability is:

**Turning a visual, branding, event, retail, or commercial requirement into a physical production.**

Do not use generic positioning such as:

* "solusi kreatif"
* "creative solutions"
* "partner terpercaya"
* "solusi terbaik"
* "jasa profesional" without specific evidence

Prefer concrete language that communicates what CSK actually does.

---

## 3. Website Design Direction

The website should feel like a **modern digital showroom for a real production company**.

Priorities:

* Strong visual impact
* Real project imagery
* Clear hierarchy
* Easy exploration
* Commercial credibility
* Professional B2B appearance
* Clear and concise copy
* Good whitespace
* Strong typography
* Consistent spacing
* Responsive design
* Fast loading

Avoid generic AI-generated website patterns.

Do not automatically produce:

* excessive gradients
* unnecessary glassmorphism
* decorative blobs
* excessive rounded cards
* meaningless statistics
* generic "innovative/creative/solutions" copy
* excessive animations
* visual effects that do not help the user understand the business

Design decisions must support the business and user journey.

---

## 4. Homepage Principle

The homepage should not try to explain everything at once.

The basic flow should be:

**Attention → Understand → Explore → See Proof → Imagine → Contact**

The homepage should progressively reveal CSK's capabilities.

A visitor should quickly understand:

* what CSK produces
* the breadth of its capabilities
* the quality of its work
* what kinds of projects it handles
* how to start a conversation

Portfolio and real production work are important evidence.

Do not replace strong real project imagery with decorative stock imagery when real assets are available.

---

## 5. Content Source

Keep business content/data separated from presentation whenever the existing architecture supports it.

Current important locations include:

* `src/site.js`
* `src/data/`
* `public/assets/`

Do not duplicate the same business information across multiple components unnecessarily.

When changing business copy, first check whether the content already exists in `src/site.js` or `src/data/`.

Prefer changing the data source rather than hardcoding duplicate content inside page components.

---

## 6. Image / Asset Architecture

The current asset architecture uses:

* `public/assets/`
* `AssetImage.astro`

The older convention using `<Picture>` and images from `src/img/` may exist in historical instructions or older code.

**Do not automatically introduce the old `<Picture>` convention into new work.**

Before changing image-related code:

1. Inspect the existing implementation.
2. Follow the current `AssetImage` architecture.
3. Reuse existing assets whenever possible.
4. Do not duplicate images unnecessarily.
5. Do not invent asset paths.

If an asset is missing, identify the missing asset instead of silently substituting an unrelated image.

---

## 7. Components and Existing Architecture

Before creating a new component, inspect the existing components and determine whether an existing component can be reused.

Prefer:

* reuse
* small focused components
* consistent patterns
* minimal duplication

Do not rewrite working parts of the website simply to introduce a new pattern.

When modifying an existing section, preserve its working behavior unless the task explicitly requires changing it.

---

## 8. Styling

Use the existing Tailwind setup and project styling conventions.

Brand colors should use the project's existing design tokens/variables rather than arbitrary colors scattered throughout components.

Before introducing new colors, typography, spacing systems, shadows, or border styles:

1. Check the existing design system.
2. Reuse existing tokens where possible.
3. Add a new token only when there is a clear design reason.

The website should feel like one coherent system, not a collection of independently generated sections.

---

## 9. Copywriting

Primary language: **Bahasa Indonesia**.

Tone:

* informal-professional
* direct
* commercially clear
* confident without exaggeration
* understandable by business users

Avoid unnecessary corporate jargon.

Avoid making unsupported claims such as:

* "nomor satu"
* "terbaik"
* "termurah"
* "paling profesional"
* "terpercaya" without evidence
* fabricated project counts
* fabricated client logos
* fabricated statistics

When possible, explain the actual capability rather than making a vague claim about quality.

---

## 10. Portfolio

Portfolio is a major trust and discovery mechanism.

Use real project information and real images whenever available.

A portfolio item should help the visitor understand:

* what was produced
* what type of project it was
* the visual result
* potentially the production context
* what CSK's capability was

Do not create fake project descriptions merely to fill a grid.

Avoid repeating the same image as different projects unless the images genuinely represent different aspects of the same project and the UI clearly communicates that relationship.

---

## 11. SEO

SEO should follow the actual business and user intent.

Do not stuff keywords.

Use natural terminology related to the products/services CSK actually provides.

Important principles:

* page titles should describe the page accurately
* headings should be meaningful
* descriptions should help users understand the offering
* internal links should make sense
* image alt text should describe meaningful images
* service/product pages should contain useful information, not keyword filler

Do not create pages solely because a keyword exists if the page has no useful content.

---

## 12. B2B Orientation

The website primarily targets business/project users.

Examples include:

* brand teams
* marketing teams
* event teams
* procurement
* retail teams
* agencies
* exhibition/event practitioners
* companies requiring custom production

The website should help these users evaluate CSK as a potential production vendor.

Therefore emphasize:

* capability
* actual work
* production quality
* scope
* materials/process where useful
* project context
* clear communication
* easy contact

Do not write the website as if it were a casual consumer marketplace.

---

## 13. Responsive Design

Design mobile-first and verify desktop layouts as well.

Every meaningful layout change should consider:

* mobile
* tablet
* desktop
* image cropping
* text wrapping
* navigation
* spacing
* CTA accessibility

Do not assume that a desktop layout will automatically work well on mobile.

---

## 14. Accessibility and UX

Use semantic HTML where appropriate.

Maintain:

* readable contrast
* meaningful headings
* accessible buttons/links
* useful alt text
* keyboard-friendly interactions where applicable
* clear focus states where applicable

Do not sacrifice usability for visual effects.

---

## 15. AI Agent Workflow

When working as an AI coding agent, follow this workflow:

### Step 1 — Inspect

Before modifying code:

* inspect the relevant files
* understand the current architecture
* identify reusable components
* check existing data/assets
* understand the current implementation

Do not immediately rewrite the project.

### Step 2 — Plan

For non-trivial changes, briefly identify:

* what will change
* which files are affected
* why the change is needed

Do not create a large speculative architecture when a small change is sufficient.

### Step 3 — Implement

Make the smallest coherent change that achieves the requested result.

Preserve existing working behavior.

Do not modify unrelated files.

### Step 4 — Verify

Run:

```bash
npm run build
```

Fix build errors before considering the task complete.

If the task involves visual/layout changes, also inspect the resulting page in the browser when possible.

### Step 5 — Report

Summarize:

* what changed
* which files changed
* verification result
* any remaining issue or limitation

Do not claim success if the build or relevant verification failed.

---

## 16. Git Discipline

Do not make unrelated changes.

Before committing:

```bash
git status
```

Review the changes.

Do not commit automatically unless the user has asked for a commit or explicitly approved committing.

Commit messages should describe the actual change.

Example:

```text
feat: update portfolio section
```

or:

```text
fix: improve mobile navigation
```

---

## 17. Important Constraints

Never:

* invent business facts
* invent client/project information
* invent assets
* remove working functionality without reason
* rewrite large parts of the application unnecessarily
* introduce a new architecture without inspecting the existing one
* duplicate business data unnecessarily
* revert to outdated image conventions without a reason
* optimize for SEO at the expense of users
* create generic AI-looking layouts simply because they are easy to generate

When uncertain, inspect the repository first.

When an existing implementation conflicts with this document, prefer the **current working code architecture** and update this document when the architecture has intentionally changed.

---

## 18. Current Technical Baseline

Deployment target:

**Cloudflare Pages**

Build:

```bash
npm run build
```

Output directory:

```text
dist/
```

Framework:

**Astro**

Styling:

**Tailwind CSS**

Current image architecture:

```text
public/assets/
AssetImage.astro
```

Primary business/content sources include:

```text
src/site.js
src/data/
```

These paths represent the current architecture. Always inspect the repository before assuming a file or directory exists.

---

## 19. Definition of Done

A website change is considered complete when:

1. The requested functionality/design has been implemented.
2. Existing functionality has not been unnecessarily broken.
3. Content uses the correct project data sources.
4. Existing assets/components are reused where appropriate.
5. The layout works responsively.
6. No obvious placeholder or fabricated business content remains.
7. `npm run build` succeeds.
8. The final change is limited to relevant files.

The goal is not to generate the most code.

The goal is to make the CSK website **clearer, stronger, more credible, and more useful to real business users.**
