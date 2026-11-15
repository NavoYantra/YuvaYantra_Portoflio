const sharp = require('sharp');

async function testWhiteLogo() {
  const meta = await sharp('public/primary-logo-white.png').metadata();
  console.log('primary-logo-white.png:', meta);
  const { data, info } = await sharp('public/primary-logo-white.png').raw().toBuffer({ resolveWithObject: true });
  let whiteCount = 0, orangeCount = 0, otherCount = 0;
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a > 100) {
      const r = data[i], g = data[i+1], b = data[i+2];
      if (r === 255 && g === 255 && b === 255) whiteCount++;
      else if (r > 160 && b < 100) orangeCount++;
      else otherCount++;
    }
  }
  console.log({ whiteCount, orangeCount, otherCount });
}
testWhiteLogo();
