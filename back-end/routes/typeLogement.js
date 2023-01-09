const express = require("express");
const { gettypesLogements, getTypeLogement, addTypeLogement, updateTypeLogement, deleteTypeLogement } = require("../controllers/typeLogementController");
const router = express.Router();

router.get("/", gettypesLogements);
router.get("/show/:id", getTypeLogement);
router.post("/add", addTypeLogement);
router.put("/update/:id", updateTypeLogement);
router.delete("/delete/:id", deleteTypeLogement);

module.exports = router;
