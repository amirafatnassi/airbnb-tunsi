const express = require("express");
const {
  getCriteres,
  getCritere,
  addCritere,
  updateCritere,
  deleteCritere,
} = require("../controllers/critereController");
const router = express.Router();

router.get("/", getCriteres);
router.get("/show/:id", getCritere);
router.post("/add", addCritere);
router.put("/update/:id", updateCritere);
router.delete("/delete/:id", deleteCritere);

module.exports = router;
