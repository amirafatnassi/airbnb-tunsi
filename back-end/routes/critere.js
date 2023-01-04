const express = require("express");
const {
  getCriteres,
  getCritere,
  addCritere,
  updateCritere,
  deleteCritere,
} = require("../controllers/critereController");
const router = express.Router();

router.get("/getCriteres", getCriteres);
router.get("/getCritere", getCritere);
router.post("/addCritere", addCritere);
router.put("/updateCritere/:id", updateCritere);
router.delete("/deleteCritere/:id", deleteCritere);

module.exports = router;
