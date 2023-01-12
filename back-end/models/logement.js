const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogementSchema = new Schema(
  {
    titre: String,
    adresse: {
      rue: String,
      ville: String,
      cp: Number,
      pays: String,
      num: Number,
    },
    nb_invites: Number,
    nb_chambres: Number,
    nb_lits: Number,
    nb_salledeBain: Number,
    options: [{ type: mongoose.Schema.Types.ObjectId, ref: "Option" }],
    criteres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Critere" }],
    installations: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Installation" },
    ],
    safetyItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "SafetyItem" }],
    typeContrat: { type: mongoose.Schema.Types.ObjectId, ref: "TypeContrat" },
    typeLogement: { type: mongoose.Schema.Types.ObjectId, ref: "TypeLogement" },
    photos: [{ type: String }],
    description: String,
    prix: Number,
    contact_info: String,
    hote: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: Number,
  },
  { timestamps: true, versionKey: false }
);

const logements = mongoose.model("Logement", LogementSchema);
module.exports = logements;
