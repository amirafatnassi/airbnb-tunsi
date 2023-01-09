const installations = require("../models/installations");

exports.getInstallations = async (req, res) => {
  try {
    const result = await installations.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getInstallation = async (req, res) => {
  try {
    const installation = await installations.findById(req.params.id);
    if (installation) {
      res.status(200).send(installation);
    } else {
      res.status(401).send("installation not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

  exports.addInstallation = async (req, res) => {
  try {
    const installation = await installations.create(req.body);
    res.status(200).send(installation);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateInstallation = async (req, res) => {
  try {
    await installations.findByIdAndUpdate(req.params.id, req.body);
    const updatedInstallation = await installations.findById(req.params.id);
    res.status(200).send(updatedInstallation);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteInstallation = async (req, res) => {
  try {
    const deletedInstallation = await installations.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedInstallation);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};
