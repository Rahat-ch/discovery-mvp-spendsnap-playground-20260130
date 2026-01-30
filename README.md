# SpendSnap (Daily Discovery MVP)

Upload/paste a receipt → instantly get a clean spending dashboard.

This repo started as an “MCP Apps playground”, but we’re tailoring it for a **regular-person** audience and a video-friendly “holy shit” moment.

## What it does

- Lets you **upload a receipt image** (simulated OCR for now) or paste receipt text
- Click **Analyze**
- Generates a dashboard with:
  - Merchant + date
  - Total + tax
  - Category breakdown (pie)
  - Line items table
  - Quick insights

**Demo note:** image upload currently uses **simulated OCR** (drops in a sample receipt text). The dashboard pipeline is the focus; we can swap in real OCR later.

## Run it

```bash
npm install
npm run dev
```

Open:
- http://localhost:3000

If you’re on the same LAN:
- http://<your-mac-mini-ip>:3000

## How to try it

1) Click **Use sample receipt** → then **Analyze**
2) Or upload an image (mobile supports “camera” via the file picker) → then **Analyze**

## Tech

- Node.js + Express
- Plain HTML/CSS/JS (intentionally minimal)

## What’s next (for the real product feel)

- Real OCR (local or API) → receipt text extraction
- Better receipt parsing (line items, totals, dates, store detection)
- Editable categories + instant re-totals (super satisfying in video)
- “This month vs last month” trend view (even with mocked history)
