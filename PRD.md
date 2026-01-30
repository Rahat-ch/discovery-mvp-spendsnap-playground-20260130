# SpendSnap — Receipt → Dashboard (Demo PRD)

**Goal:** Turn the current demo into a *consumer-feeling* experience using **Variant Scanner 4** as the product flow baseline and the **Variant landing page** as the visual system.

This is not a full product build; it is optimized for a “holy shit” demo video and for someone opening the local web demo and instantly *getting it*.

## North Star
A regular person uploads/snaps a receipt and, within seconds, sees a beautiful dashboard that answers:
- **Where did my money go?**
- **What category dominated?**
- **What’s the single quick win?**

## Constraints
- Keep **plain HTML/CSS/JS** (no React, no Tailwind).
- No external network calls.
- Works with current Express static server:
  - `static/index.html` (host)
  - `static/app.html` (dashboard iframe)
- Iframe remains sandboxed (`allow-scripts` only).
- OCR remains **simulated** for now (demo inserts sample receipt text) but UX must feel like real scanning.

## Visual Direction (match landing page)
Reference screenshots:
- `docs/screenshots/landing-variant.jpg` (primary source of palette/typography/spacing)
- `docs/screenshots/variant-chat-collage.jpg` (context)

**Look & feel keywords:** editorial, warm, premium, calm, not “fintech app store”.

### Palette (approx; match by eye)
- Background: warm cream / parchment (light beige)
- Primary text: near-black
- Accent: deep olive/forest (CTA buttons)
- Secondary accents: soft pastel gradients (optional) for receipt card glow

### Typography
- Headline: elegant serif (Canela/Playfair-like look). Use CSS `font-family` fallback stack that approximates:
  - `ui-serif, Georgia, "Times New Roman", Times, serif`
- Body/UI: system sans
  - `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`

## Product Flow (Scanner 4 baseline)
### Landing (index.html)
A polished landing-like page that naturally funnels into the demo flow:
**Landing → Scanner → Dashboard**.

Sections:
1) **Top nav**
   - Left: “SpendSnap.” wordmark
   - Right: small “Login” link (non-functional) + primary CTA “Get App”
   - **Behavior:** clicking **Get App** should *open the receipt scanner* section (scroll/transition to the scan module) — no dead CTA.
2) **Hero**
   - Eyebrow: “AUTOMATED FINANCE”
   - Headline (serif, large): “Stop guessing where your money went.”
   - Subcopy: 2–3 lines explaining magic
   - Primary button: “Start Scanning Free”
   - Hero visual: receipt card with soft gradient glow (mock)
3) **Scan module (the demo interaction)**
   - Prominent upload area that encourages camera usage
     - Button: “Scan receipt”
     - Secondary: “Upload from gallery”
   - When a file is chosen: show preview with scan overlay.
   - Optional: allow paste receipt text behind an “Advanced” toggle.

### Scan/Analyze States
- **Idle:** CTA visible, “Upload receipt” affordance
- **Scanning (simulated):**
  - Camera flash microinteraction
  - Scanline animation over preview
  - Status copy: “Reading receipt…”
- **Success:**
  - Transition to dashboard view (iframe) with a smooth fade/slide.

### Dashboard (app.html)
A clean spending report.

Dashboard content:
- Header: “Spending Report”
- Total (big serif number)
- Merchant + date
- Category breakdown (pie) + legend
- Line items table
- Insight cards (3 bullets)

## “Holy Shit” Microinteractions (implement at least 2)
1) **Scan animation → dashboard reveal**
   - Flash + scanline + progressive reveal (staggered)
2) **Animated numbers**
   - Total + category totals count up
3) **Chart draw animation**
   - Pie chart draws clockwise; legend fades in

(Stretch) drag-to-recategorize can come later; for this pass, focus on visual delight.

## Copy (consumer-first)
- Avoid: MCP, host, iframe, tool_data, JSON
- Use: scan, upload, dashboard, insights, spending

Suggested microcopy:
- “Upload a receipt. Get a dashboard.”
- “Nothing is uploaded. Demo runs locally.” (small footer)

## Success Criteria
- A first-time user can open the page and instantly know what to do.
- The scan flow feels real even with simulated OCR.
- Dashboard feels premium and shareable (video-ready).

## Implementation Plan (high level)
1) Redesign `static/index.html` to match landing aesthetic and include scan module.
2) Redesign `static/app.html` to match same palette/typography.
3) Add scan-state animations in `index.html` (flash + scanline + loading).
4) Ensure iframe messaging still works and triggers dashboard render.
5) Keep debug payload hidden behind a “Developer” collapsible (optional).
