const sharp = require('sharp');

async function check() {
  const orig = await sharp('public/primary logo.png').metadata();
  const trimmed = await sharp('public/primary logo.png').trim().metadata();
  console.log('Original:', orig.width, 'x', orig.height);
  console.log('Trimmed:', trimmed.width, 'x', trimmed.height);
  // Let's see the offset
  const { info } = await sharp('public/primary logo.png').trim().toBuffer({ resolveWithObject: true });
  console.log('Trim info:', info);
}
check();
