const sharp = require('sharp');
const path = require('path');
const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';
const navoFile = path.join(userDir, 'media_1794666922727_cce8321d.png');

async function inspectNavo() {
  const { data, info } = await sharp(navoFile).raw().toBuffer({ resolveWithObject: true });
  console.log('Navo info:', info);
  
  // Let's find background color by sampling the 4 corners:
  const corners = [
    [0, 0],
    [info.width - 1, 0],
    [0, info.height - 1],
    [info.width - 1, info.height - 1]
  ];
  corners.forEach(([x, y]) => {
    const idx = (y * info.width + x) * 4;
    console.log(`Corner (${x}, ${y}): R:${data[idx]}, G:${data[idx+1]}, B:${data[idx+2]}, A:${data[idx+3]}`);
  });
}
inspectNavo();
