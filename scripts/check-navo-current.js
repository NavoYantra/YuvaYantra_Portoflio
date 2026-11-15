const sharp = require('sharp');

async function check() {
  const meta = await sharp('public/images/navoyantra-logo.png').metadata();
  console.log('navoyantra-logo.png:', meta.width, 'x', meta.height);
}
check();
