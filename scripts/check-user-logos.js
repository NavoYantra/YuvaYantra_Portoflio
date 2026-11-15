const sharp = require('sharp');
const path = require('path');
const file = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/media_1794666922727_cce8321d.png';

async function check() {
  const m = await sharp(file).metadata();
  console.log('cce8321d metadata:', m);
  // find non-white/non-grey pixels
  const { data } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  let coloredPixels = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i+1], b = data[i+2];
    const diff = Math.max(Math.abs(r-g), Math.abs(r-b), Math.abs(g-b));
    if (diff > 30) coloredPixels++;
  }
  console.log('coloredPixels:', coloredPixels);
}
check();
