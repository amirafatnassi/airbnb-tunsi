const express = require("express");
const passport = require("passport");
const { getOptions, getOption, addOption, updateOption, deleteOption } = require("../controllers/optionController");
const router = express.Router();

router.get("/",  passport.authenticate("bearer", { session: false }),getOptions);
router.get("/show/:id", passport.authenticate("bearer", { session: false }), getOption);
router.post("/add",  passport.authenticate("bearer", { session: false }),addOption);
router.put("/update/:id",  passport.authenticate("bearer", { session: false }),updateOption);
router.delete("/delete/:id", passport.authenticate("bearer", { session: false }), deleteOption);

module.exports = router;
