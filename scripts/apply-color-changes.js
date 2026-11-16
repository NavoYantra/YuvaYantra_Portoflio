const fs = require('fs');
const path = require('path');

const colorMap = [
  // Primary Orange
  [/rgb\(255,\s*87,\s*34\)/gi, 'rgb(255, 111, 30)'],
  [/#FF5722\b/gi, '#FF6F1E'],
  [/#E64A19\b/gi, '#F45B0A'],
  [/#FF7043\b/gi, '#FF8742'],
  
  // Dark Blue / Navy
  [/#0B1E38\b/gi, '#102A4E'],
  [/#0B2545\b/gi, '#153A6B'],
  [/#0F2748\b/gi, '#173E73'],
  [/#14325C\b/gi, '#1A437C'],
  [/#1E3A5F\b/gi, '#20487E'],
  [/#071527\b/gi, '#0D203C'],
  
  // Soft tints
  [/#FFF7F2\b/gi, '#FFF8F5'],
  [/#FFE8DC\b/gi, '#FFEFE6'],
  [/#FFF5F0\b/gi, '#FFF8F5']
];

let modifiedFiles = 0;
function applyChanges(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const s = fs.statSync(full);
    if (s.isDirectory() && !full.includes('node_modules') && !full.includes('.next') && !full.includes('_backup')) {
      applyChanges(full);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css')) {
      let content = fs.readFileSync(full, 'utf8');
      let changed = false;
      colorMap.forEach(([regex, replacement]) => {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      });
      if (changed) {
        fs.writeFileSync(full, content, 'utf8');
        modifiedFiles++;
        console.log('Updated:', full.replace(process.cwd(), ''));
      }
    }
  }
}

applyChanges(path.join(process.cwd(), 'src'));
console.log(`Total modified files: ${modifiedFiles}`);
