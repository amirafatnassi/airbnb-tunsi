const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema(
  {
    logement: { type: mongoose.Schema.Types.ObjectId, ref: "Logement" },
    guest: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date_debut: Date,
    date_fin: Date,
    nb_invites: Number,
    total: Number,
    rating: { type: Number, default: 0 },
    commentaire: String,
  },
  { timestamps: true, versionKey: false }
);

const reservations = mongoose.model("Reservation", ReservationSchema);
module.exports = reservations;
