const typesContrats = require("../models/typeContrat");

exports.gettypesContrats = async (req, res) => {
  try {
    const result = await typesContrats.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getTypeContrat = async (req, res) => {
  try {
    const typeContrat = await typesContrats.findById(req.params.id);
    if (typeContrat) {
      res.status(200).send(typeContrat);
    } else {
      res.status(401).send("TypeContrat not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

  exports.addTypeContrat = async (req, res) => {
  try {
    const typeContrat = await typesContrats.create(req.body);
    res.status(200).send(typeContrat);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateTypeContrat = async (req, res) => {
  try {
    await typesContrats.findByIdAndUpdate(req.params.id, req.body);
    const updatedTypeContrat = await typesContrats.findById(req.params.id);
    res.status(200).send(updatedTypeContrat);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteTypeContrat = async (req, res) => {
  try {
    const deletedTypeContrat = await typesContrats.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedTypeContrat);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};