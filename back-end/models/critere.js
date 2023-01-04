const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CritereSchema = new Schema(
  {
    lib:String
  },
  { timestamps: true, versionKey: false }
);

const criteres = mongoose.model("Critere", CritereSchema);
module.exports = criteres;
