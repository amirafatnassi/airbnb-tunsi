const logements = require("../models/logement");

exports.getLogements = async (req, res) => {
  try {
    const result = await logements.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getLogement = async (req, res) => {
  try {
    const logement = await logements.findById(req.params.id);
    if (logement) {
      res.status(200).send(logement);
    } else {
      res.status(401).send("Logement not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.addLogement = async (req, res) => {
  try {
    req.body.adresse = JSON.parse(req.body.adresse);
    req.body.installations = req.body.installations.split(",");
    req.body.criteres = req.body.criteres.split(",");
    req.body.options = req.body.options.split(",");
    req.body.safetyItems = req.body.safetyItems.split(",");

    let photos = [];
    req.files.map((photo) => {
      photos.push(`http://localhost:4000/uploads/${photo.filename}`);
    });
    req.body.photos = photos;
    await logements.create(req.body);
    res.status(200).send({ message: "created successfully !" });
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateLogement = async (req, res) => {
  try {
    const logement = await logements.findById(req.params.id);
    req.body.adresse = JSON.parse(req.body.adresse);
    req.body.installations = req.body.installations.split(",");
    req.body.criteres = req.body.criteres.split(",");
    req.body.options = req.body.options.split(",");
    req.body.safetyItems = req.body.safetyItems.split(",");

    let photos = logement.photos;
    req.files.map((photo) => {
      photos.push(`http://localhost:4000/uploads/${photo.filename}`);
    });
    req.body.photos = photos;
    await logements.findByIdAndUpdate(req.params.id, req.body);
    const updatedLogement = await logements.findById(req.params.id);
    res.status(200).send(updatedLogement);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteLogement = async (req, res) => {
  try {
    const deletedLogement = await logements.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedLogement);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};
