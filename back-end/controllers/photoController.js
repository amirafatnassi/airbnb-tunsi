const photo = require("../models/photo");

exports.uploadSinglePhoto = async (req, res) => {
  try {
    if (req.file) {
      await photo.create(req.body);
      res.status(200).send({ message: "photo uploaded successfully" });
    } else {
      res.status(400).send({ message: "photo not allowed !" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.uploadMultiplePhotos = async (req, res) => {
  try {
    await photo.create(req.body);
    res.send({ message: "photos uploaded !" });
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur !" });
  }
};
