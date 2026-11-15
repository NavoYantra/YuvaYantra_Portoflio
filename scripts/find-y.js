const sharp = require('sharp');

async function checkFile() {
  const p = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/media_1794666975030_78251f1d.png';
  const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
  
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = info.channels === 4 ? data[idx + 3] : 255;
      
      const isNavy = r < 50 && g < 80 && b < 120;
      const isOrange = r > 200 && g > 60 && g < 140 && b < 70;
      
      if ((isNavy || isOrange) && a > 50) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log('media_1794666975030_78251f1d bounds:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });
}

checkFile().catch(console.error);
