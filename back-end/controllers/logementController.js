const { populate } = require("../models/logement");
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
    const logement = await logements.findById(req.params.id).populate('options').populate('criteres').populate('installations').populate('safetyItems');
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
  try { console.log(req.body);
 await logements.create(req.body);
    res.status(200).send({ message: "created successfully !" });
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateLogement = async (req, res) => {
  try {
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
