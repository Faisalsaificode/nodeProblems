const express = require("express");
const path = require("path");
const usersController = require("./src/controllers/users.controller");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.get("/users", usersController);

// serve static assets (optional)
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}
