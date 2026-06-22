const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(__dirname, "..", "public");

const images = [
  {
    input: "44.jpg",
    base: "44",
    widths: [768, 1280, 1920],
    quality: 82,
  },
  {
    input: "1009.png",
    base: "1009",
    widths: [640, 1024, 1200],
    quality: 82,
  },
  {
    input: "happy.png",
    base: "happy",
    widths: [480, 768, 960],
    quality: 82,
  },
];

async function optimizeImage({ input, base, widths, quality }) {
  const inputPath = path.join(publicDir, input);

  if (!fs.existsSync(inputPath)) {
    console.warn(`Skipping missing file: ${input}`);
    return;
  }

  const metadata = await sharp(inputPath).metadata();
  const uniqueWidths = [...new Set(widths)]
    .filter((width) => width <= (metadata.width ?? width))
    .sort((a, b) => a - b);

  if (uniqueWidths.length === 0 && metadata.width) {
    uniqueWidths.push(metadata.width);
  }

  for (const width of uniqueWidths) {
    const outputName = `${base}-${width}.webp`;
    const outputPath = path.join(publicDir, outputName);

    await sharp(inputPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      .toFile(outputPath);

    const { size } = fs.statSync(outputPath);
    console.log(`  ${outputName} (${Math.round(size / 1024)} KB)`);
  }

  const largestWidth = uniqueWidths[uniqueWidths.length - 1];
  const fallbackName = `${base}.webp`;
  const fallbackPath = path.join(publicDir, fallbackName);

  fs.copyFileSync(
    path.join(publicDir, `${base}-${largestWidth}.webp`),
    fallbackPath
  );
  console.log(`  ${fallbackName} (fallback)`);
}

async function main() {
  console.log("Optimizing public images...\n");

  for (const image of images) {
    console.log(image.input);
    await optimizeImage(image);
    console.log("");
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
