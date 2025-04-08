const http = require('http');
const fs = require('fs');

let filePath = 'path/to/your/project'; // Replace with the actual file path

fs.readFile(filePath, (err, data) => {
  if (err) {
    throw err;
  }
  
  const jsonData = JSON.parse(data);
  
  http.createServer((req, res) => {
    let content = '';
    
    if (jsonData['method'] === 'get') {
      // Your get request code here
      content = 'GET /file.json HTTP/1.1\r\n' +
                'Content-Type: application/json\r\n' +
                '\r\n' + JSON.stringify(jsonData) + '\r\n';
    } else if (jsonData['method'] === 'post') {
      // Your post request code here
      content = 'POST /file.json HTTP/1.1\r\n' +
                'Content-Type: application/json\r\n' +
                '\r\n' + JSON.stringify(jsonData) + '\r\n';
    } else if (jsonData['method'] === 'delete') {
      // Your delete request code here
      content = 'DELETE /file.json HTTP/1.1\r\n' +
                'Content-Type: application/json\r\n' +
                '\r\n' + JSON.stringify(jsonData) + '\r\n';
    } else if (jsonData['method'] === 'put') {
      // Your put request code here
      content = 'PUT /file.json HTTP/1.1\r\n' +
                'Content-Type: application/json\r\n' +
                '\r\n' + JSON.stringify(jsonData) + '\r\n';
    }
    
    res.writeHead(200, { 'Content-Length': Buffer.byteLength(content) });
    res.end(content);
  }).listen(8080, () => {
    console.log('Server running at http://localhost:8080');
  });
});
