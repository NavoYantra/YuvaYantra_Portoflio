const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const userDir = 'C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.user_uploaded/';

async function generateAssets() {
  console.log('--- Generating Clean Assets ---');
  
  // 1. Process YuvaYantra Logo:
  // Source is media_1794666975030_78251f1d.png or media_1794666954607_e687f6af.jpg
  const yuvaSource = path.join(userDir, 'media_1794666954607_e687f6af.jpg');
  const { data: yuvaData, info: yuvaInfo } = await sharp(yuvaSource).raw().toBuffer({ resolveWithObject: true });
  
  // Remove white background -> make transparent PNG
  const yuvaTransBuffer = Buffer.alloc(yuvaInfo.width * yuvaInfo.height * 4);
  for (let i = 0; i < yuvaInfo.width * yuvaInfo.height; i++) {
    const r = yuvaData[i * 3];
    const g = yuvaData[i * 3 + 1];
    const b = yuvaData[i * 3 + 2];
    
    // Check white / near-white
    const isWhite = r > 240 && g > 240 && b > 240;
    if (isWhite) {
      yuvaTransBuffer[i * 4] = 0;
      yuvaTransBuffer[i * 4 + 1] = 0;
      yuvaTransBuffer[i * 4 + 2] = 0;
      yuvaTransBuffer[i * 4 + 3] = 0;
    } else {
      // Soft alpha edge for anti-aliasing near white
      const brightness = (r + g + b) / 3;
      let alpha = 255;
      if (brightness > 220) {
        alpha = Math.max(0, Math.min(255, Math.round((255 - brightness) * (255 / 35))));
      }
      yuvaTransBuffer[i * 4] = r;
      yuvaTransBuffer[i * 4 + 1] = g;
      yuvaTransBuffer[i * 4 + 2] = b;
      yuvaTransBuffer[i * 4 + 3] = alpha;
    }
  }
  
  // Save transparent yuvayantra-logo.png
  await sharp(yuvaTransBuffer, { raw: { width: yuvaInfo.width, height: yuvaInfo.height, channels: 4 } })
    .trim()
    .png()
    .toFile('public/images/yuvayantra-logo.png');
  console.log('Saved transparent public/images/yuvayantra-logo.png');

  // Also create a version of yuvayantra logo for dark backgrounds (white text where it was dark navy, orange stays orange)
  const yuvaDarkBuffer = Buffer.alloc(yuvaInfo.width * yuvaInfo.height * 4);
  for (let i = 0; i < yuvaInfo.width * yuvaInfo.height; i++) {
    const r = yuvaTransBuffer[i * 4];
    const g = yuvaTransBuffer[i * 4 + 1];
    const b = yuvaTransBuffer[i * 4 + 2];
    const a = yuvaTransBuffer[i * 4 + 3];
    
    if (a === 0) {
      yuvaDarkBuffer[i * 4] = 0;
      yuvaDarkBuffer[i * 4 + 1] = 0;
      yuvaDarkBuffer[i * 4 + 2] = 0;
      yuvaDarkBuffer[i * 4 + 3] = 0;
    } else {
      // If it's orange (R > 180 and R > G * 1.5) -> keep vivid orange
      const isOrange = r > 180 && r > g * 1.3 && b < 100;
      if (isOrange) {
        yuvaDarkBuffer[i * 4] = r;
        yuvaDarkBuffer[i * 4 + 1] = g;
        yuvaDarkBuffer[i * 4 + 2] = b;
        yuvaDarkBuffer[i * 4 + 3] = a;
      } else {
        // Navy or black text -> make bright white for dark backgrounds
        yuvaDarkBuffer[i * 4] = 255;
        yuvaDarkBuffer[i * 4 + 1] = 255;
        yuvaDarkBuffer[i * 4 + 2] = 255;
        yuvaDarkBuffer[i * 4 + 3] = a;
      }
    }
  }
  
  await sharp(yuvaDarkBuffer, { raw: { width: yuvaInfo.width, height: yuvaInfo.height, channels: 4 } })
    .trim()
    .png()
    .toFile('public/images/yuvayantra-logo-white.png');
  console.log('Saved transparent white-variant public/images/yuvayantra-logo-white.png');

  // 2. Extract the pure "Y" mark for Favicon & Icon:
  // Bounds were minX: 37, maxX: 299, minY: 45, maxY: 277
  const yWidth = 299 - 37 + 1;
  const yHeight = 277 - 45 + 1;
  const yMarkBuffer = Buffer.alloc(yWidth * yHeight * 4);
  
  for (let y = 0; y < yHeight; y++) {
    for (let x = 0; x < yWidth; x++) {
      const srcIdx = ((45 + y) * yuvaInfo.width + (37 + x)) * 4;
      const dstIdx = (y * yWidth + x) * 4;
      yMarkBuffer[dstIdx] = yuvaTransBuffer[srcIdx];
      yMarkBuffer[dstIdx + 1] = yuvaTransBuffer[srcIdx + 1];
      yMarkBuffer[dstIdx + 2] = yuvaTransBuffer[srcIdx + 2];
      yMarkBuffer[dstIdx + 3] = yuvaTransBuffer[srcIdx + 3];
    }
  }
  
  // Pad into a clean 512x512 square icon with subtle margin
  const squareIcon = await sharp(yMarkBuffer, { raw: { width: yWidth, height: yHeight, channels: 4 } })
    .trim()
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();
    
  fs.writeFileSync('public/images/yuvayantra-mark.png', squareIcon);
  fs.writeFileSync('public/favicon.png', squareIcon);
  fs.writeFileSync('public/favicon.ico', squareIcon);
  fs.writeFileSync('src/app/icon.png', squareIcon);
  fs.writeFileSync('src/app/apple-icon.png', squareIcon);
  console.log('Saved square Y-mark favicon & icons across public/ and src/app/');

  // 3. Process NavoYantra Logo:
  // Source is media_1794666954585_5dedfb3b.png
  const navoSource = path.join(userDir, 'media_1794666954585_5dedfb3b.png');
  const { data: navoData, info: navoInfo } = await sharp(navoSource).raw().toBuffer({ resolveWithObject: true });
  
  const navoTransBuffer = Buffer.alloc(navoInfo.width * navoInfo.height * 4);
  for (let i = 0; i < navoInfo.width * navoInfo.height; i++) {
    const r = navoData[i * 4];
    const g = navoData[i * 4 + 1];
    const b = navoData[i * 4 + 2];
    const a = navoData[i * 4 + 3];
    
    // Check checkerboard pattern (greys/whites)
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    const isNeutral = (diff < 20 && min > 150) || a === 0;
    
    if (isNeutral) {
      navoTransBuffer[i * 4] = 0;
      navoTransBuffer[i * 4 + 1] = 0;
      navoTransBuffer[i * 4 + 2] = 0;
      navoTransBuffer[i * 4 + 3] = 0;
    } else {
      navoTransBuffer[i * 4] = r;
      navoTransBuffer[i * 4 + 1] = g;
      navoTransBuffer[i * 4 + 2] = b;
      navoTransBuffer[i * 4 + 3] = a;
    }
  }
  
  await sharp(navoTransBuffer, { raw: { width: navoInfo.width, height: navoInfo.height, channels: 4 } })
    .trim()
    .png()
    .toFile('public/images/navoyantra-logo.png');
  console.log('Saved transparent public/images/navoyantra-logo.png');
}

generateAssets().catch(console.error);
