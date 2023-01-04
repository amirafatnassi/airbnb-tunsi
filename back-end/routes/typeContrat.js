const express = require("express");
const { gettypesContrats, getTypeContrat, addTypeContrat, updateTypeContrat, deleteTypeContrat } = require("../controllers/typeContratController");
const router = express.Router();

router.get("/getTypeContrats", gettypesContrats);
router.get("/getTypeContrat", getTypeContrat);
router.post("/addTypeContrat", addTypeContrat);
router.put("/updateTypeContrat/:id", updateTypeContrat);
router.delete("/deleteTypeContrat/:id", deleteTypeContrat);

module.exports = router;
