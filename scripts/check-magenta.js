const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';
const f = path.join(userDir, 'media_1794666922727_cce8321d.png');

async function checkMagenta() {
  const { data, info } = await sharp(f).raw().toBuffer({ resolveWithObject: true });
  let magentaCount = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i+1], b = data[i+2];
    // magenta is high R, low G, high B (e.g. R: 200+, G: 0-50, B: 150-255)
    if (r > 200 && g < 60 && b > 120) {
      magentaCount++;
    }
  }
  console.log('Magenta count in media_1794666922727_cce8321d.png:', magentaCount);
}
checkMagenta();
