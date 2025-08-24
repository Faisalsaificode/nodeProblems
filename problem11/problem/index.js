// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body = "";

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                // Append the request body to data.txt
                fs.appendFileSync("data.txt", body + "\n");

                // Read the updated file content
                const fileContent = fs.readFileSync("data.txt", "utf-8");

                // Print file content to console
                console.log("Welcome to Coding Ninjas! Today's quote of the day is", fileContent);

                // Send response
                res.end("Data is Received and Stored Successfully");
            } catch (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Error while writing to file");
            }
        });
    } else {
        res.end("Welcome to Node JS");
    }
});

export default server;
