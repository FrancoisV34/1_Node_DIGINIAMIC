const http = require('http');
const { URL } = require('url');
const os = require('os');

const myUrl = new URL('https://www.example.com');
myUrl.pathname = '/unepage';
myUrl.search = '?query=marecherche';
myUrl.hash = '#section2';
console.log('boo'); // Affiche l'URL complète
function displayOsMessage() {
  const platform = os.platform();

  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if (parsedUrl.pathname === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Homepage: Welcome to our website!');
    } else if (parsedUrl.pathname === '/status') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Server is running smoothly.');
    } else if (parsedUrl.pathname === '/info') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Operating System Info: ${os.type()} ${os.release()}`);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: The requested resource could not be found.');
    }
  });
}
displayOsMessage();

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
