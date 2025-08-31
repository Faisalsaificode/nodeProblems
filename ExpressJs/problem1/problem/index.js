// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = (req, res, next) => {
  // Log method and path separately
  console.log(req.method);
  console.log(req.path);

  next();
};

// Middleware applied for GET at "/"
app.get("/", logRequest, (req, res) => {
  res.send("Coding Ninjas!");
});

// Add a dummy /test route so tests can hit it
app.get("/test", logRequest, (req, res) => {
  res.send("Test route");
});

module.exports = app;
