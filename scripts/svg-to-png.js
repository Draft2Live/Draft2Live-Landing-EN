// One-shot script: rasterize public/og-images/og-en.svg to PNG at 1200x630.
// Run with: node scripts/svg-to-png.js
// Why: SVG og:images are not supported by Facebook/LinkedIn/Telegram/Slack/WhatsApp/X.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Render og-en-v2.svg (the current source of truth, matches landing copy)
// to og-en-v2.png. og-en.svg is kept as legacy fallback.
const inPath = path.resolve(__dirname, '..', 'public', 'og-images', 'og-en-v2.svg');
const outPath = path.resolve(__dirname, '..', 'public', 'og-images', 'og-en-v2.png');

(async () => {
  const svg = fs.readFileSync(inPath);
  // density 192 (2x of default 96 dpi) renders the SVG larger then sharp resizes
  // back to 1200x630 — gives crisper text/edges than a single-pass render.
  const buf = await sharp(svg, { density: 192 })
    .resize(1200, 630, { fit: 'cover' })
    .png({ compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(outPath, buf);
  const stat = fs.statSync(outPath);
  console.log(`Wrote ${outPath} (${stat.size} bytes)`);
})().catch((e) => {
  console.error('FAIL:', e);
  process.exit(1);
});
