const express = require("express");
const passport = require("passport");
const { getInstallations, getInstallation, addInstallation, updateInstallation, deleteInstallation } = require("../controllers/installationController");
const router = express.Router();

router.get("/", passport.authenticate("bearer", { session: false }), getInstallations);
router.get("/show/:id",  passport.authenticate("bearer", { session: false }),getInstallation);
router.post("/add", passport.authenticate("bearer", { session: false }), addInstallation);
router.put("/update/:id", passport.authenticate("bearer", { session: false }), updateInstallation);
router.delete("/delete/:id",  passport.authenticate("bearer", { session: false }),deleteInstallation);

module.exports = router;
