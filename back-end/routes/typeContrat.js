const express = require("express");
const passport = require("passport");
const { gettypesContrats, getTypeContrat, addTypeContrat, updateTypeContrat, deleteTypeContrat } = require("../controllers/typeContratController");
const router = express.Router();

router.get("/",  passport.authenticate("bearer", { session: false }),gettypesContrats);
router.get("/show/:id", passport.authenticate("bearer", { session: false }), getTypeContrat);
router.post("/add", passport.authenticate("bearer", { session: false }), addTypeContrat);
router.put("/update/:id", passport.authenticate("bearer", { session: false }), updateTypeContrat);
router.delete("/delete/:id",  passport.authenticate("bearer", { session: false }),deleteTypeContrat);

module.exports = router;
