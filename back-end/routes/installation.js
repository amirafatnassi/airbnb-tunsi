const express = require("express");
const { getInstallations, getInstallation, addInstallation, updateInstallation, deleteInstallation } = require("../controllers/installationController");
const router = express.Router();

router.get("/getInstallations", getInstallations);
router.get("/getInstallation", getInstallation);
router.post("/addInstallation", addInstallation);
router.put("/updateInstallation/:id", updateInstallation);
router.delete("/deleteInstallation/:id", deleteInstallation);

module.exports = router;
