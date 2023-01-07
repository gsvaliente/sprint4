const express = require("express");
const database = require("./db/users.json");

const app = express();
const PORT = 3000;

//endpoint for the user page
app.get("/user", (req, res) => {
  res.status(200).json(database);
  res.end();
});

app.post("/upload", (req, res) => {});

//endpoint for the upload
app.all("*", (req, res) => {
  res.status(404).send("PAGE DOES NOT EXIST");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}....`);
});
