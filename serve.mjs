import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
http.createServer((req,res)=>{let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400).end();return}let file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403).end();return}if(!path.extname(file))file=path.join(file,'index.html');fs.readFile(file,(err,data)=>{if(err){res.writeHead(404,{'Content-Type':'text/plain'}).end('Page not found');return}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'}).end(data)});}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
