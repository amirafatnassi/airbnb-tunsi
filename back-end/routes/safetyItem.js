const express = require("express");
const { getSafetyItems, getSafetyItem, addSafetyItem, updateSafetyItem, deleteSafetyItem } = require("../controllers/safetyItemController");
const router = express.Router();

router.get("/getSafetyItems", getSafetyItems);
router.get("/getSafetyItem", getSafetyItem);
router.post("/addSafetyItem", addSafetyItem);
router.put("/updateSafetyItem/:id", updateSafetyItem);
router.delete("/deleteSafetyItem/:id", deleteSafetyItem);

module.exports = router;
