const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: [true, "email is required"] },
    password: { type: String, required: [true, "password is required"] },
    address: String,
    role: {
      type: String,
      enum: ["admin", "staff", "airbnbOwner", "user"],
      default: "user"
  },  },
  { timestamps: true, versionKey: false }
);

const users = mongoose.model("User", UserSchema);
module.exports = users;
