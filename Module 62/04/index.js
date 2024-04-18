import express from "express";

const app = express();
const PORT = 3535;

// Generate Random Number
const randomNum = Math.floor(Math.random() * 100);

app.get("/random", (req, res) => {
  res.send(randomNum.toString());
});

app.listen(PORT);
