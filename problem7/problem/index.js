const fs = require("fs");

const Solution = () => {
  // Append asynchronously
  fs.appendFile("note.txt", " new data", (err) => {
    if (err) {
      console.error("Error appending file:", err);
      return;
    }

    console.log("file updated successfully!");

    // Now read the file AFTER append is complete
    fs.readFile("note.txt", "utf-8", (readErr, data) => {
      if (readErr) {
        console.error("Error reading file:", readErr);
        return;
      }

      // Console will now show the latest file contents
      console.log(data);
    });
  });
};

Solution();
module.exports = Solution;
