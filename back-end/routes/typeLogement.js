const express = require("express");
const { gettypesLogements, getTypeLogement, addTypeLogement, updateTypeLogement, deleteTypeLogement } = require("../controllers/typeLogementController");
const router = express.Router();

router.get("/getTypeLogements", gettypesLogements);
router.get("/getTypeLogement", getTypeLogement);
router.post("/addTypeLogement", addTypeLogement);
router.put("/updateTypeLogement/:id", updateTypeLogement);
router.delete("/deleteTypeLogement/:id", deleteTypeLogement);

module.exports = router;
