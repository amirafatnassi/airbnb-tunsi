const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstallationSchema = new Schema(
  {
    lib:String,
    icon:String
  },
  { timestamps: true, versionKey: false }
);

const installations = mongoose.model("Installation", InstallationSchema);
module.exports = installations;
