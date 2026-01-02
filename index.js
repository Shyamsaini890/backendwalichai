require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.listen(process.env.PORT, () => {
  console.log(`server listen on ${process.env.PORT} `);
});
