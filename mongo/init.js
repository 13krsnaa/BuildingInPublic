const mongoose = require("mongoose");

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

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    maxLength: 500,
  },
  time: {
    type: Date,
    required: true,
  },
});

const chatData = mongoose.model("chat", chatSchema);

const allChats = [
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
  {
    from: "Keshav",
    to: "Krishna",
    message: "Hello Krishna",
    //* ye time ko currunt time se set krta hai */
    time: new Date(),
  },
];
chatData.insertMany(allChats);
