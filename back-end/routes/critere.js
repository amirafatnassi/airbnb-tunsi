const express = require("express");
const passport = require("passport");
const {
  getCriteres,
  getCritere,
  addCritere,
  updateCritere,
  deleteCritere,
} = require("../controllers/critereController");
const router = express.Router();

router.get("/", passport.authenticate("bearer", { session: false }), getCriteres);
router.get("/show/:id",  passport.authenticate("bearer", { session: false }),getCritere);
router.post("/add", passport.authenticate("bearer", { session: false }), addCritere);
router.put("/update/:id", passport.authenticate("bearer", { session: false }), updateCritere);
router.delete("/delete/:id", passport.authenticate("bearer", { session: false }), deleteCritere);

module.exports = router;
