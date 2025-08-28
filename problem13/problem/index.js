import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}
const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  // Configure Nodemailer (use a Gmail App Password for `pass`)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:'faisalsaifi.code@gmail.com',
      pass:'bydl ylmd redo azna',
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => (data += chunk));

    req.on("end", () => {
      const type = (req.headers["content-type"] || "").toLowerCase();
      let payload = {};

      try {
        if (type.includes("application/json")) {
          payload = JSON.parse(data || "{}");
        } else if (type.includes("application/x-www-form-urlencoded")) {
          payload = Object.fromEntries(new URLSearchParams(data));
        } else {
          // Fallback: try JSON then URL-encoded
          try {
            payload = JSON.parse(data || "{}");
          } catch {
            payload = Object.fromEntries(new URLSearchParams(data));
          }
        }
      } catch {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Invalid body");
      }

      const name = (payload.name || "").trim();
      const email = (payload.email || "").trim();
      const message = (payload.message || "").trim();

      if (!name || !email || !message) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Missing name, email, or message");
      }

      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      // Append asynchronously to queries.txt
      fs.appendFile("queries.txt", queryString, (fileErr) => {
        if (fileErr) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Failed to save query");
        }

        // Send confirmation email
        const mailOptions = {
          from: "faisalsaifi.code@gmail.com",
          to: email,
          subject: "Query received",
          text: "We have received your query and will get back to you soon.",
        };

        transporter.sendMail(mailOptions, (mailErr) => {
          if (mailErr) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Failed to send email");
          }

          // Emit custom event after successful mail
          customEvent.mailSent(email);

          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Query received");
        });
      });
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Coding Ninjas!");
  }
});

// Log the custom event
customEvent.addListener("mailSent", (email) => {
  console.log("custom event 'mailSent' emitted");
  console.log(`confirming that the email has been sent successfully to ${email}`);
});

// Start server on port 5000
const port = 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;
export { server, CustomEvent };
