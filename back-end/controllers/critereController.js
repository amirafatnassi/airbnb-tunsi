const criteres = require("../models/critere");

exports.getCriteres = async (req, res) => {
  try {
    const result = await criteres.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getCritere = async (req, res) => {
  try {
    const critere = await criteres.findById(req.params.id);
    if (critere) {
      res.status(200).send(critere);
    } else {
      res.status(401).send("critere not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

  exports.addCritere = async (req, res) => {
  try {
    const critere = await criteres.create(req.body);
    res.status(200).send(critere);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateCritere = async (req, res) => {
  try {
    await criteres.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteCritere = async (req, res) => {
  try {
    const deletedCritere = await criteres.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedCritere);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};
