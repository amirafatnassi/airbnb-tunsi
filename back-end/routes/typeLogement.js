const express = require("express");
const passport = require("passport");
const { gettypesLogements, getTypeLogement, addTypeLogement, updateTypeLogement, deleteTypeLogement } = require("../controllers/typeLogementController");
const router = express.Router();

router.get("/", passport.authenticate("bearer", { session: false }), gettypesLogements);
router.get("/show/:id",  passport.authenticate("bearer", { session: false }),getTypeLogement);
router.post("/add", passport.authenticate("bearer", { session: false }), addTypeLogement);
router.put("/update/:id",  passport.authenticate("bearer", { session: false }),updateTypeLogement);
router.delete("/delete/:id",  passport.authenticate("bearer", { session: false }),deleteTypeLogement);

module.exports = router;
