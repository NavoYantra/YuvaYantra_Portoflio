const sharp = require('sharp');
const fs = require('fs');

async function createNavoLogo() {
  // Let's create an SVG that renders the NavoYantra emblem + text
  // We can embed the navoyantra-mark.png as base64 or SVG
  const markBase64 = fs.readFileSync('public/images/navoyantra-mark.png').toString('base64');
  
  const svg = `
  <svg width="1000" height="260" viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg">
    <image href="data:image/png;base64,${markBase64}" x="0" y="20" width="220" height="220"/>
    <g transform="translate(245, 140)">
      <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="108" font-weight="900" letter-spacing="-1">
        <tspan fill="#0254D8">Navo</tspan>
        <tspan fill="#FF5722">Yantra</tspan>
      </text>
    </g>
    <g transform="translate(250, 195)">
      <line x1="0" y1="0" x2="35" y2="0" stroke="#FF5722" stroke-width="4"/>
      <text x="45" y="4" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="800" fill="#475569" letter-spacing="4">
        STEM KITS &amp; LAB SOLUTIONS
      </text>
      <line x1="585" y1="0" x2="620" y2="0" stroke="#FF5722" stroke-width="4"/>
    </g>
  </svg>
  `;
  
  const buffer = await sharp(Buffer.from(svg))
    .trim()
    .png()
    .toBuffer();
    
  fs.writeFileSync('public/images/navoyantra-logo.png', buffer);
  console.log('Generated clean composite public/images/navoyantra-logo.png');
}

createNavoLogo().catch(console.error);
