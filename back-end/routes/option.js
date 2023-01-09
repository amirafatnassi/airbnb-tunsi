const express = require("express");
const { getOptions, getOption, addOption, updateOption, deleteOption } = require("../controllers/optionController");
const router = express.Router();

router.get("/", getOptions);
router.get("/show/:id", getOption);
router.post("/add", addOption);
router.put("/update/:id", updateOption);
router.delete("/delete/:id", deleteOption);

module.exports = router;
