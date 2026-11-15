const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processPrimaryLogo() {
  const primaryPath = path.join(process.cwd(), 'public', 'primary logo.png');
  console.log('Loading primary logo from:', primaryPath);
  
  // 1. Copy to primary-logo.png without space
  fs.copyFileSync(primaryPath, path.join(process.cwd(), 'public', 'primary-logo.png'));
  console.log('Copied to public/primary-logo.png');

  // 2. Get trimmed version of primary logo
  const trimmed = await sharp(primaryPath).trim().png().toBuffer();
  fs.writeFileSync('public/images/yuvayantra-logo.png', trimmed);
  fs.writeFileSync('public/primary-logo-trimmed.png', trimmed);
  
  const trimmedMeta = await sharp(trimmed).metadata();
  console.log('Trimmed dimensions:', trimmedMeta.width, 'x', trimmedMeta.height);

  // 3. Create White-text variant for dark backgrounds (Footer, Industry card)
  // In primary logo:
  // Navy text & navy icon part is R: 0-50, G: 20-60, B: 40-80
  // Orange text & icon part is R: 230-255, G: 70-130, B: 0-40
  const { data, info } = await sharp(trimmed).raw().toBuffer({ resolveWithObject: true });
  const whiteBuffer = Buffer.alloc(info.width * info.height * 4);

  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];

    if (a < 10) {
      whiteBuffer[i * 4] = 0;
      whiteBuffer[i * 4 + 1] = 0;
      whiteBuffer[i * 4 + 2] = 0;
      whiteBuffer[i * 4 + 3] = 0;
    } else {
      // Check if pixel is Orange
      const isOrange = r > 160 && r > g * 1.3 && b < 100;
      if (isOrange) {
        // Keep original vibrant orange
        whiteBuffer[i * 4] = r;
        whiteBuffer[i * 4 + 1] = g;
        whiteBuffer[i * 4 + 2] = b;
        whiteBuffer[i * 4 + 3] = a;
      } else {
        // Navy or dark text -> Pure Crisp White
        whiteBuffer[i * 4] = 255;
        whiteBuffer[i * 4 + 1] = 255;
        whiteBuffer[i * 4 + 2] = 255;
        whiteBuffer[i * 4 + 3] = a;
      }
    }
  }

  const whiteLogo = await sharp(whiteBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/images/yuvayantra-logo-white.png', whiteLogo);
  fs.writeFileSync('public/primary-logo-white.png', whiteLogo);
  console.log('Generated public/images/yuvayantra-logo-white.png');

  // 4. Extract pure "Y" mark icon from trimmed primary logo for favicon
  // Let's find the bounding box of the left mark:
  // In the trimmed logo, the Y icon is on the left side (x: 0 to ~450)
  let markMaxX = 0;
  // Let's scan from x=0 to info.width/3 to find mark bounds
  const markWidthEstimate = Math.round(info.height * 1.1); // icon is roughly square or slightly wider
  const markBuffer = await sharp(trimmed)
    .extract({ left: 0, top: 0, width: markWidthEstimate, height: info.height })
    .trim()
    .png()
    .toBuffer();

  const markSquare = await sharp(markBuffer)
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 26, bottom: 26, left: 26, right: 26, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.writeFileSync('public/images/yuvayantra-mark.png', markSquare);
  fs.writeFileSync('public/favicon.png', markSquare);
  fs.writeFileSync('public/favicon.ico', markSquare);
  fs.writeFileSync('src/app/icon.png', markSquare);
  fs.writeFileSync('src/app/apple-icon.png', markSquare);
  console.log('Generated favicon and mark icon from primary logo');
}

processPrimaryLogo().catch(console.error);
