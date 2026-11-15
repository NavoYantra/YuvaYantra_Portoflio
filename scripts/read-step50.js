const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream('C:/Users/Rohit Rathore/.gemini/antigravity/brain/134e9e66-e9a2-4861-ba3f-9f25272769c6/.system_generated/logs/transcript_full.jsonl');
const rl = readline.createInterface({ input: stream });
rl.on('line', (line) => {
  if (line.includes('"step_index":50,')) {
    const obj = JSON.parse(line);
    const content = obj.tool_calls[0].args.Content;
    const navoIdx = content.indexOf('export const NavoYantraLogo');
    console.log(content.slice(navoIdx, navoIdx + 1500));
  }
});
