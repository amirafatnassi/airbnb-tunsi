const express = require("express");
const { getOptions, getOption, addOption, updateOption, deleteOption } = require("../controllers/optionController");
const router = express.Router();

router.get("/getOptions", getOptions);
router.get("/getOption", getOption);
router.post("/addOption", addOption);
router.put("/updateOption/:id", updateOption);
router.delete("/deleteOption/:id", deleteOption);

module.exports = router;
