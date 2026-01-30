# MCP Apps Playground (Daily Discovery MVP)

A tiny local sandbox to demo the **MCP Apps** pattern:

- a **host** page (parent) sends tool output/data
- a sandboxed **UI** (iframe) renders it
- they talk via `postMessage` (stand-in for an MCP App bridge)

This was inspired by the recently-stabilized MCP Apps Extension spec (SEP-1865) in `@modelcontextprotocol/ext-apps`.

## What it does

- Lets you paste/edit a JSON payload representing a tool call/result
- Sends it to a sandboxed iframe
- The iframe renders the payload and can emit UI events back to the host

## Run it

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

## Usage

1. Edit the JSON on the left (tool name, input, output, etc.)
2. Click **Send to UI**
3. Watch the iframe render the data + the host log update

## Tech

- Node.js + Express
- Plain HTML/CSS/JS (intentionally minimal)

## Limitations

- This is **not** a full MCP Apps host implementation
- It uses `postMessage` directly (no schema validation, no bridge, no security hardening)
- Sandbox is strict (`sandbox="allow-scripts"`) to keep the demo safe

## What’s next

- Add a small bridge layer that mirrors the MCP Apps host/app-bridge API shape
- Add schema validation + message origin checks
- Add a “tool call simulator” panel (UI event -> mocked tool call -> updated tool_data)
- Export/shareable demo payloads (no secrets)
