const mongoose = require("mongoose");

const url =
  "mongodb+srv://Sachin:12345@cluster0.9kteqvb.mongodb.net/Sachin?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};


// mongodb+srv://Stackdata:12345@cluster0.9kteqvb.mongodb.net/Stackdata?retryWrites=true&w=majority