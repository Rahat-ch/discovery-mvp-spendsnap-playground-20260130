import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Static assets
app.use("/static", express.static(path.join(__dirname, "..", "static"), {
  etag: true,
  maxAge: "1h"
}));

app.get("/", (_req, res) => {
  // Avoid caching HTML during rapid demo iteration
  res.set("Cache-Control", "no-store");
  res.type("html").sendFile(path.join(__dirname, "..", "static", "index.html"));
});

app.get("/app", (_req, res) => {
  // This is the iframe content (a stand-in for an MCP App UI resource).
  // Avoid caching HTML during rapid demo iteration
  res.set("Cache-Control", "no-store");
  res.type("html").sendFile(path.join(__dirname, "..", "static", "app.html"));
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`MCP Apps Playground running on http://localhost:${PORT}`);
});
