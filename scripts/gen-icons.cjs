/**
 * Generates the Apple touch icon from the brand logo.
 *
 * The tab icon (app/icon.svg) is the full logo drawn in white on transparency.
 * The home-screen icon has room for colour, so it gets the full logo composited
 * onto the paper colour.
 *
 * Run with: node scripts/gen-icons.cjs
 */
const fs = require("fs");
const sharp = require("sharp");

const CANVAS = 180; // standard apple-touch-icon size
const ART = 152; // logo area, leaving iOS mask room
const PAD = (CANVAS - ART) / 2;

// paper colour from app/globals.css --paper
const PAPER = { r: 245, g: 242, b: 236, alpha: 1 };

async function main() {
  const logo = fs.readFileSync("public/logo.svg");

  // Render the line art on transparency first, then place it on the paper
  // background. Rendering straight onto the background would lose the
  // anti-aliased edges of the strokes.
  const art = await sharp(logo, { density: 600 })
    .resize(ART, ART, { fit: "contain" })
    .png()
    .toBuffer();

  const icon = await sharp({
    create: { width: CANVAS, height: CANVAS, channels: 4, background: PAPER },
  })
    .composite([{ input: art, left: PAD, top: PAD }])
    .png()
    .toBuffer();

  fs.writeFileSync("app/apple-icon.png", icon);

  const meta = await sharp(icon).metadata();
  console.log(
    `wrote app/apple-icon.png — ${meta.width}x${meta.height}, ${icon.length} bytes`,
  );
}

main().catch((err) => {
  console.error("Failed to generate apple icon:", err.message);
  process.exit(1);
});
