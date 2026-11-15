const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';
const f = path.join(userDir, 'media_1794731762829_b01a988a.png');

async function findCircle() {
  const { data, info } = await sharp(f).raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // magenta / pink
      if (r > 190 && g < 70 && b > 100) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('Magenta circle in b01a988a:', { minX, maxX, minY, maxY, width: maxX-minX+1, height: maxY-minY+1 });
  if (maxX > minX && maxY > minY) {
    await sharp(f).extract({ left: minX, top: minY, width: maxX-minX+1, height: maxY-minY+1 }).png().toFile('scripts/magenta_cropped.png');
    console.log('Saved scripts/magenta_cropped.png');
  }
}
findCircle();
