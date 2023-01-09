const express = require("express");
const { getInstallations, getInstallation, addInstallation, updateInstallation, deleteInstallation } = require("../controllers/installationController");
const router = express.Router();

router.get("/", getInstallations);
router.get("/show/:id", getInstallation);
router.post("/add", addInstallation);
router.put("/update/:id", updateInstallation);
router.delete("/delete/:id", deleteInstallation);

module.exports = router;
