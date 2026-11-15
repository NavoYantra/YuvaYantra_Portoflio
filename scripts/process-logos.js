const sharp = require('sharp');
const path = require('path');

const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';

const files = {
  yuvaLogo: 'media_1794666954607_e687f6af.jpg',
  yuvaMark: 'media_1794666975030_78251f1d.png',
  navoMark: 'media_1794666975049_3276f395.png',
  navoLogo: 'media_1794666954585_5dedfb3b.png'
};

async function getBBox(name, filename) {
  const fullPath = path.join(userDir, filename);
  const { data, info } = await sharp(fullPath).raw().toBuffer({ resolveWithObject: true });
  
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = info.channels === 4 ? data[idx + 3] : 255;
      
      // Check if pixel is not background (not white and not transparent and not grey checkerboard)
      const isWhite = r > 240 && g > 240 && b > 240;
      const isGrey = Math.abs(r - g) < 15 && Math.abs(r - b) < 15 && r > 180;
      
      if (!isWhite && !isGrey && a > 50) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log(name, { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY, aspect: ((maxX - minX)/(maxY - minY)).toFixed(2) });
}

async function run() {
  for (const [key, filename] of Object.entries(files)) {
    await getBBox(key, filename);
  }
}

run().catch(console.error);
