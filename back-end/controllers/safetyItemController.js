const safetyItems = require("../models/safetyItem");

exports.getSafetyItems = async (req, res) => {
  try {
    const result = await safetyItems.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getSafetyItem = async (req, res) => {
  try {
    const safetyItem = await safetyItems.findById(req.params.id);
    if (safetyItem) {
      res.status(200).send(safetyItem);
    } else {
      res.status(401).send("safety Item not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.addSafetyItem = async (req, res) => {
  try {
    const safetyItem = await safetyItems.create(req.body);
    res.status(200).send(safetyItem);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateSafetyItem = async (req, res) => {
  try {
    await safetyItems.findByIdAndUpdate(req.params.id, req.body);
    const updatedSafetyItem = await SafetyItems.findById(req.params.id);
    res.status(200).send(updatedSafetyItem);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteSafetyItem = async (req, res) => {
  try {
    const deletedSafetyItem = await SafetyItems.findByIdAndDelete(
      req.params.id
    );
    res.status(200).send(deletedSafetyItem);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};
