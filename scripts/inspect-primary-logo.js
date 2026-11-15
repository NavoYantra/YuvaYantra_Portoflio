const sharp = require('sharp');
const path = require('path');
const file = path.join(process.cwd(), 'public', 'primary logo.png');

async function main() {
  const { data, info } = await sharp(file).trim().raw().toBuffer({ resolveWithObject: true });
  console.log('Trimmed:', info.width, 'x', info.height);
  
  const colorMap = {};
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 128) {
      const r = Math.round(data[i] / 20) * 20;
      const g = Math.round(data[i+1] / 20) * 20;
      const b = Math.round(data[i+2] / 20) * 20;
      const k = r + ',' + g + ',' + b;
      colorMap[k] = (colorMap[k] || 0) + 1;
    }
  }
  const sorted = Object.entries(colorMap).sort((a,b) => b[1] - a[1]).slice(0, 10);
  console.log('Top colors (r,g,b):', sorted);
}

main().catch(console.error);
