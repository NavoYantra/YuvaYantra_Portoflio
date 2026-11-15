const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';
const f = path.join(userDir, 'media_1794666954585_5dedfb3b.png');

async function inspect5ded() {
  const meta = await sharp(f).metadata();
  console.log('5ded metadata:', meta);
  const trimmed = await sharp(f).trim().metadata();
  console.log('5ded trimmed:', trimmed.width, 'x', trimmed.height);
}
inspect5ded();
