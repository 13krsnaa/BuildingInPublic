const mongoose = require("mongoose");

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

const chat1 = new chatData({
  from: "Keshav",
  to: "Krishna",
  message: "Hello Krishna",
  //* ye time ko currunt time se set krta hai */
  time: new Date(),
});

chat1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = chatData;
