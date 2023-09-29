const http = require('http');
// const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const id = url.split("/")[1];

  const destination = `${process.env.BASE_URL}/${id}`;

  console.log(`===> Redirecting to ${destination}`)

  res.writeHead(302, { Location: destination });
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
