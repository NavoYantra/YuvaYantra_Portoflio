const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';
const f1 = path.join(userDir, 'media_1794666922727_cce8321d.png');

async function test() {
  const meta = await sharp(f1).metadata();
  console.log('f1 meta:', meta);
  // Let's sample colors in f1:
  const { data } = await sharp(f1).raw().toBuffer({ resolveWithObject: true });
  console.log('Channels:', meta.channels);
}
test();
