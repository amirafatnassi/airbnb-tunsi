const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoleSchema = new Schema(
  {
    role: {
      type: String,
      required: [true, "role est obligatoire !"],
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const roles = mongoose.model("Role", RoleSchema, "roles");
module.exports = roles;
