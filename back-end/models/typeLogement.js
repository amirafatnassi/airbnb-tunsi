const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypeLogementSchema = new Schema(
  {
    lib:String
  },
  { timestamps: true, versionKey: false }
);

const typesLogements = mongoose.model("TypeLogement", TypeLogementSchema);
module.exports = typesLogements;
