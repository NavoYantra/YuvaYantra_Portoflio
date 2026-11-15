const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = 'public/images/img';

function getJpegFiles(dir, files = []) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getJpegFiles(full, files);
    else if (entry.name.endsWith('.jpeg') || entry.name.endsWith('.jpg')) files.push(full);
  });
  return files;
}

async function analyze() {
  const allJpegs = getJpegFiles(baseDir);
  console.log(`Analyzing ${allJpegs.length} images...`);
  
  // Sort by file size (largest / highest detail first)
  const sorted = allJpegs.map(p => ({ path: p, size: fs.statSync(p).size }))
    .sort((a, b) => b.size - a.size);
    
  console.log('Top 20 largest/highest resolution images:');
  for (let i = 0; i < 20; i++) {
    const item = sorted[i];
    const meta = await sharp(item.path).metadata();
    console.log(i + 1, path.basename(item.path), `${meta.width}x${meta.height}`, `${(item.size/1024).toFixed(0)}KB`, meta.width > meta.height ? 'Landscape' : 'Portrait');
  }
}

analyze().catch(console.error);
