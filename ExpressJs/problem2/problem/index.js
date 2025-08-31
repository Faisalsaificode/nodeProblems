// index.js
// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here
server.get("/", (req, res) => {
  res.end("get");
});

server.post("/", (req, res) => {
  res.end("post");
});

server.put("/", (req, res) => {
  res.end("put");
});

server.delete("/", (req, res) => {
  res.end("delete");
});

module.exports = server;
