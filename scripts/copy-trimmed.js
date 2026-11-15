const fs = require('fs');
// Copy trimmed to primary-logo.png and images/yuvayantra-logo.png
fs.copyFileSync('public/primary-logo-trimmed.png', 'public/primary-logo.png');
fs.copyFileSync('public/primary-logo-trimmed.png', 'public/images/yuvayantra-logo.png');
console.log('Updated public/primary-logo.png and public/images/yuvayantra-logo.png with trimmed high-res logo');
