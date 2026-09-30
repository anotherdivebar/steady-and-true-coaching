import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const files=['index.html','approach/index.html','coaching/index.html','start/index.html'];
for(const file of files){const html=fs.readFileSync(`dist/${file}`,'utf8');assert(html.includes('<main id="main">'),`${file}: main landmark`);assert(html.includes('<meta name="description"'),`${file}: description`);assert.equal((html.match(/<h1>/g)||[]).length,1,`${file}: one h1`);for(const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)){const url=match[1];const local=path.join('dist',url.endsWith('/')?`${url}index.html`:url);assert(fs.existsSync(local),`${file}: broken reference ${url}`);}}
const css=fs.readFileSync('dist/style.css','utf8');for(const match of css.matchAll(/url\('(\/[^']+)'\)/g))assert(fs.existsSync(path.join('dist',match[1])),`Missing image ${match[1]}`);
console.log('Passed: all four pages, page metadata, landmarks, internal links and local assets.');
