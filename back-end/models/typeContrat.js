const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypeContratSchema = new Schema(
  {
    lib:String
  },
  { timestamps: true, versionKey: false }
);

const typesContrats = mongoose.model("TypeContrat", TypeContratSchema);
module.exports = typesContrats;
