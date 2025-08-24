const axios = require("axios");

const Solution = async () => {
  try {
    const res = await axios.get("https://api.codingninjas.com/api/v3/event_tags");
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
Solution();
module.exports = Solution;
