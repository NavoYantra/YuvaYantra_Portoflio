const sharp = require('sharp');

async function checkCropped() {
  const { data, info } = await sharp('scripts/magenta_cropped.png').raw().toBuffer({ resolveWithObject: true });
  // Find non-magenta, non-background pixels inside the center of the cropped image
  // The center is roughly x: 20 to info.width-20, y: 15 to info.height-15
  const map = {};
  for (let y = 15; y < info.height - 15; y++) {
    for (let x = 20; x < info.width - 20; x++) {
      const idx = (y * info.width + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // ignore magenta
      if (r > 190 && g < 70 && b > 100) continue;
      const roundR = Math.round(r/30)*30;
      const roundG = Math.round(g/30)*30;
      const roundB = Math.round(b/30)*30;
      const k = `${roundR},${roundG},${roundB}`;
      map[k] = (map[k] || 0) + 1;
    }
  }
  console.log('Inside circle colors:', Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0, 15));
}
checkCropped();
