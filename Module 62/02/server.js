import express from "express";

const app = express();
const PORT = 3535;

// Counter
let counter = 10;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send(counter.toString());
});

app.get("/increment", (req, res) => {
  counter += 1;
  res.setHeader("Content-Type", "text/plain");
  res.send(counter.toString());
});

app.get("/decrement", (req, res) => {
  counter -= 1;
  res.setHeader("Content-Type", "text/plain");
  res.send(counter.toString());
});

app.listen(PORT);
