const express=require("express");
const { getLogements, getLogement, addLogement, updateLogement, deleteLogement } = require("../controllers/logementController");
const router=express.Router();

router.get("/", getLogements);
router.get("/show/:id", getLogement);
router.post("/add", addLogement);
router.put("/update/:id", updateLogement);
router.delete("/delete/:id", deleteLogement);

module.exports=router;