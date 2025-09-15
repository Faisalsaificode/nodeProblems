const userModel = require("../models/users.model");

async function userController(req, res) {
  try {
    const users = await userModel();
    return res.render("index", { users });
  } catch (err) {
    console.error("userController error:", err);
    return res.status(500).send("Unable to fetch users. Please try again later.");
  }
}

module.exports = userController;
