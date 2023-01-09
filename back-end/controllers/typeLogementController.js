const typesLogements = require("../models/typeLogement");

exports.gettypesLogements = async (req, res) => {
  try {
    const result = await typesLogements.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getTypeLogement = async (req, res) => {
  try {
    const typeLogement = await typesLogements.findById(req.params.id);
    if (typeLogement) {
      res.status(200).send(typeLogement);
    } else {
      res.status(401).send("TypeLogement not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

  exports.addTypeLogement = async (req, res) => {
  try {
    const typeLogement = await typesLogements.create(req.body);
    res.status(200).send(typeLogement);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateTypeLogement = async (req, res) => {
  try {
    await typesLogements.findByIdAndUpdate(req.params.id, req.body);
    const updatedTypeLogement = await typesLogements.findById(req.params.id);
    res.status(200).send(updatedTypeLogement);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteTypeLogement = async (req, res) => {
  try {
    const deletedTypeLogement = await typesLogements.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedTypeLogement);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};