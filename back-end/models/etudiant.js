const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EtudiantSchema = new Schema(
  {
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    niveau: String,
    classe: String,
    date_naissance: Date,
    status: String,
  },
  { timestamps: true, versionKey: false }
);

const etudiants = mongoose.model("Etudiant", EtudiantSchema);
module.exports = etudiants;
