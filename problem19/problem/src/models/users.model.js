const axios = require("axios");

async function userModel() {
  const res = await axios.get("https://dummyjson.com/users");
  if (!res || !res.data || !Array.isArray(res.data.users)) {
    throw new Error("Unexpected API response structure");
  }
  return res.data.users;
}

module.exports = userModel;
