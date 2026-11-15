const sharp = require('sharp');
const path = require('path');

const dir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded';
const files = [
  'media_1794666922727_cce8321d.png',
  'media_1794666954585_5dedfb3b.png',
  'media_1794666975030_78251f1d.png',
  'media_1794666975049_3276f395.png',
  'media_1794666954607_e687f6af.jpg'
];

async function run() {
  for (const f of files) {
    const p = path.join(dir, f);
    try {
      const trimmed = await sharp(p).trim().metadata();
      console.log(f, 'trimmed bbox:', trimmed.width, 'x', trimmed.height);
    } catch(e) {
      console.log(f, 'error:', e.message);
    }
  }
}
run();
