import express from "express";

const app = express();
const PORT = 3535;

app.get("/", (req, res) => {
  res.send("I am HomePage");
});

app.get("/about", (req, res) => {
  res.send("I am About Page");
});

app.get("/contact", (req, res) => {
  res.send("Email: support@pwskill.com");
});

app.listen(PORT);
