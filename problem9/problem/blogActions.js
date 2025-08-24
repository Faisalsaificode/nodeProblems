// Do not change the pre-written code.
// Make the necessary imports here.
import fs from "fs";

export const writeBlog = (filePath, blog) => {
  // Append the blog content to the file synchronously
  fs.appendFileSync(filePath, blog, { encoding: "utf-8" });
};

export const publishBlog = (filePath) => {
  // Read and return the file content synchronously
  return fs.readFileSync(filePath, { encoding: "utf-8" });
};
