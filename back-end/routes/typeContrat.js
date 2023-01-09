const express = require("express");
const { gettypesContrats, getTypeContrat, addTypeContrat, updateTypeContrat, deleteTypeContrat } = require("../controllers/typeContratController");
const router = express.Router();

router.get("/", gettypesContrats);
router.get("/show/:id", getTypeContrat);
router.post("/add", addTypeContrat);
router.put("/update/:id", updateTypeContrat);
router.delete("/delete/:id", deleteTypeContrat);

module.exports = router;
