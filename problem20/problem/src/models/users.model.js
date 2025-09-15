// Please don't change the pre-written code
// Import the necessary modules here
import axios from "axios";

export const userModel = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    // Return only the array of users
    return response.data.users;
  } catch (error) {
    console.error("userModel error:", error.message || error);
    return [];
  }
};
