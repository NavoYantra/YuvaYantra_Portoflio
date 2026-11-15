const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';

const files = [
  'media_1794664663230_39bda2a2.png',
  'media_1794664663240_355240f0.png',
  'media_1794664663253_8ea97b2c.png'
];

async function check() {
  for (const f of files) {
    const p = path.join(userDir, f);
    const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
    // check for blue/orange pixels
    let blue=0, orange=0;
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i], g = data[i+1], b = data[i+2];
      if (r > 200 && g > 70 && g < 150 && b < 50) orange++;
      if (b > 180 && r < 50) blue++;
    }
    console.log(f, { blue, orange });
  }
}
check();
