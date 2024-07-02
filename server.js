const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handling routes based on req.url
  if (req.url === '/') {
    // Respond with a simple HTML page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Greetings! Route is!</h1>');
  } else if (req.url === '/api') {
    // Respond with a JSON object containing a greeting message
    const responseData = { message: 'Hello, this is the API route!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  } else {
    // Respond with a 404 Not Found error for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
