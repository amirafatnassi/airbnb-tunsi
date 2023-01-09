const express = require("express");
const { getSafetyItems, getSafetyItem, addSafetyItem, updateSafetyItem, deleteSafetyItem } = require("../controllers/safetyItemController");
const router = express.Router();

router.get("/", getSafetyItems);
router.get("/show/:id", getSafetyItem);
router.post("/add", addSafetyItem);
router.put("/update/:id", updateSafetyItem);
router.delete("/delete/:id", deleteSafetyItem);

module.exports = router;
