const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OptionSchema = new Schema(
  {
    lib:String,
    icon:String
  },
  { timestamps: true, versionKey: false }
);

const options = mongoose.model("Option", OptionSchema);
module.exports = options;
