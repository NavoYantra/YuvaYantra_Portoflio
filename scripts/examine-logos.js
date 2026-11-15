const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';

const list = [
  'media_1794666922727_cce8321d.png',
  'media_1794666954585_5dedfb3b.png',
  'media_1794666954607_e687f6af.jpg',
  'media_1794666975049_3276f395.png',
  'media_1794666975030_78251f1d.png'
];

async function examine() {
  for (const f of list) {
    const p = path.join(userDir, f);
    const m = await sharp(p).metadata();
    console.log(f, m.width, 'x', m.height, m.channels, m.hasAlpha);
  }
}
examine();
