const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    if(req.method !== "GET") return;
    
    if(req.url === "/raw-html") {
        return res.end("<h1>Welcome</h1>")
    }

    if(req.url === "/users") {
        const users = fs.readFileSync("./users.json");
        return res.end(users)
    }

    let filePath = '.' + req.url;
    console.log(filePath);
    if (filePath == './') {
        filePath = './index.html';
    }
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    // console.log(extname);

    const contentType = mimeTypes[extname] || 'application/octet-stream';
    // console.log(contentType);

    fs.readFile(filePath, (error, content)=> {
        res.writeHead(200, {"Content-type": contentType})
        return res.end(content, "utf-8");
    });
    
}).listen(8125);