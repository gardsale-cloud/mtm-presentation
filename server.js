const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3099;

http.createServer((req, res) => {
    // Set CORS headers to allow requests from file://
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Handle saving slides
    if (req.method === 'POST' && req.url === '/save') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const slideNum = parseInt(data.slide);
                if (isNaN(slideNum)) throw new Error("Invalid slide number");

                const filepath = path.join(__dirname, 'slides', `slide${slideNum}.js`);
                
                // Format the JS file as it originally was
                const fileContent = `registerSlide(${slideNum}, \`\n${data.content}\n\`);\n`;
                
                fs.writeFileSync(filepath, fileContent, 'utf-8');
                console.log(`Saved slide ${slideNum}`);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'success' }));
            } catch (e) {
                console.error("Error saving slide:", e);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'error', message: e.message }));
            }
        });
        return;
    }

    // Serve static files
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content, 'utf-8');
        }
    });
}).listen(PORT, () => {
    console.log(`Local server running at http://localhost:${PORT}/`);
    console.log('Keep this terminal open while you edit the presentation.');
});
