const sharp = require('sharp');

async function findActualLogo() {
  const { data, info } = await sharp('scripts/cce_extracted.png').raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const diff = max - min;
      // Logo pixels are either colored (diff > 25) or dark text (r < 100, g < 100, b < 100)
      const isLogoPixel = diff > 25 || (r < 120 && g < 120 && b < 120);
      // ignore edges (x < 10 or y < 10) if they are just window borders
      if (isLogoPixel && x > 20 && y > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('Actual Logo Bounds:', { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1, aspect: ((maxX - minX + 1)/(maxY - minY + 1)).toFixed(2) });
}
findActualLogo();
