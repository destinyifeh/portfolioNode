const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    let filePath = path.join(__dirname, "public", "Home.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/home") {
    let filePath = path.join(__dirname, "public", "Home.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) return console.log(err);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/about") {
    let filePath = path.join(__dirname, "public", "About.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/contact") {
    let filePath = path.join(__dirname, "public", "Contact.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
