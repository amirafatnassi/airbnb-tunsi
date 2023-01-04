const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SafetyItemSchema = new Schema(
  {
    lib:String
  },
  { timestamps: true, versionKey: false }
);

const safetyItems = mongoose.model("SafetyItem", SafetyItemSchema);
module.exports = safetyItems;
