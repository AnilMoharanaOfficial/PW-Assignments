const fs = require("fs");
const os = require("os");
const http = require("http");
const EventEmitter = require("events");

// Read File
fs.readFile("nodejs_architecture.txt", function (err, data) {
  if (err) {
    console.log("Error:", err);
    return err;
  }
  const readData = data.toString();
  console.log("Data:", readData);
});

// Append Data
fs.appendFile("nodejs_architecture.txt", ": PW Skill", "utf8", function (err) {
  if (err) {
    console.log("Error in appending file");
  } else {
    console.log("Sucess in appending file");
  }
});

// Delete File
fs.unlink("nodejs_architecture copy.txt", function (err) {
  if (err) {
    console.log("Error in deleting...");
  } else {
    console.log("Success in deleting...");
  }
});

// OS Name And OS Release Version
console.log(`OS Name: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);

// HTTP module to create a server

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write(
      "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
    );
  }
  res.end();
});

server.listen(3535);

//Events
const eventEmitter = new EventEmitter();

eventEmitter.on("subscribe", () => {
  console.log("User has subscribed!");
});

eventEmitter.emit("subscribe");
