const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/airbnbGo")
  .then(() => {
    console.log("db working");
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.Promise = global.Promise;