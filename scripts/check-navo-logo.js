const sharp = require('sharp');
const path = require('path');
const dir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded';

async function check() {
  const file1 = path.join(dir, 'media_1794666922727_cce8321d.png');
  const file2 = path.join(dir, 'media_1794666954585_5dedfb3b.png');
  console.log('file1 metadata:', await sharp(file1).metadata());
  console.log('file2 metadata:', await sharp(file2).metadata());
}
check();
