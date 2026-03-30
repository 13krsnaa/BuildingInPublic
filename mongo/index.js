const express = require("express");
const mongoose = require("mongoose");

const chatData = require("./models/chat");
const ejs = require("ejs");
const path = require("path");

const app = express();

main()
  .then(() => {
    console.log("Database Connceted Sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/chats", async (req, res) => {
  const chat = await chatData.find();
  res.send("working");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
