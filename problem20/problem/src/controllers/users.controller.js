// Please don't change the pre-written code
// Import the necessary modules here
import { userModel } from "../models/users.model.js";

export const userController = async (req, res) => {
  try {
    // fetch users from model
    const users = await userModel();

    // render index.ejs with fetched users
    return res.render("index", { users });
  } catch (error) {
    console.error("userController error:", error.message || error);
    return res.status(500).send("Internal Server Error");
  }
};
