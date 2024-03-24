const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

//Express
const app = express();
app.get('/', (req, res) => {
  return res.send('Hello From Homepage');
});
app.get('/about', (req, res) => {
  return res.send(
    'Hello From About Page' + ' ' + req.query.name + ' you are ' + req.query.age
  );
});

const myServer = http.createServer(app);

//URL Parsing
// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}:New Request Received\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log({ myUrl });
//   fs.appendFile('log.txt', log, (err, data) => {
//     res.end('Hello from server');
//   });
// });

myServer.listen(8000, () => {
  console.log('server started');
});
