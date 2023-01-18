const express = require("express");
const passport = require("passport");
const { getSafetyItems, getSafetyItem, addSafetyItem, updateSafetyItem, deleteSafetyItem } = require("../controllers/safetyItemController");
const router = express.Router();

router.get("/", passport.authenticate("bearer", { session: false }), getSafetyItems);
router.get("/show/:id", passport.authenticate("bearer", { session: false }), getSafetyItem);
router.post("/add",  passport.authenticate("bearer", { session: false }),addSafetyItem);
router.put("/update/:id",  passport.authenticate("bearer", { session: false }),updateSafetyItem);
router.delete("/delete/:id", passport.authenticate("bearer", { session: false }), deleteSafetyItem);

module.exports = router;
