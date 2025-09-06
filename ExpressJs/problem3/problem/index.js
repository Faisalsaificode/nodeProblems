// Please don't change the pre-written code

const express = require("express");
const server = express();

// Set custom header on response object
const setCustomHeader = (res, headerName, headerValue) => {
  res.setHeader(headerName, headerValue);
  console.log(`Header [${headerName}] set to [${headerValue}]`);
};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
  setCustomHeader(res, "Content-Type", "application/json");
  res.end("get method called!");
});

module.exports = { setCustomHeader, server };
