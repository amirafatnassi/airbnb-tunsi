const express = require("express");
const { uploadSinglePhoto, uploadMultiplePhotos } = require("../controllers/photoController");
const upload = require("../Middlewares/upload");
const router = express.Router();

router.post("/upload-single", upload.single("image"),uploadSinglePhoto);

router.post("/upload-multiple", upload.array("image", 10),uploadMultiplePhotos );

module.exports = router;