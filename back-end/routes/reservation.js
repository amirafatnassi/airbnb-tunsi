const express = require("express");
const passport = require("passport");
const { getReservations, getReservation, addReservation, updateReservation, deleteReservation } = require("../controllers/reservationController");
const router = express.Router();

router.get("/",  passport.authenticate("bearer", { session: false }),getReservations);
router.get("/show/:id", passport.authenticate("bearer", { session: false }), getReservation);
router.post("/add",  passport.authenticate("bearer", { session: false }),addReservation);
router.put("/update/:id",  passport.authenticate("bearer", { session: false }),updateReservation);
router.delete("/delete/:id", passport.authenticate("bearer", { session: false }), deleteReservation);

module.exports = router;
