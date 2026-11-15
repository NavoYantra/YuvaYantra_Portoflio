const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';
const navoFile = path.join(userDir, 'media_1794666922727_cce8321d.png');

async function testCrop() {
  // Let's extract the region minX: 0, maxX: 720, minY: 0, maxY: 489
  const cropped = await sharp(navoFile)
    .extract({ left: 0, top: 0, width: 730, height: 489 })
    .png()
    .toFile('scripts/navo-test-cropped.png');
  console.log('Saved scripts/navo-test-cropped.png');
}
testCrop();
