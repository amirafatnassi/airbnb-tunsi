const options = require("../models/option");

exports.getOptions = async (req, res) => {
  try {
    const result = await options.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json("erreur serveur");
  }
};

exports.getOption = async (req, res) => {
  try {
    const option = await options.findById(req.params.id);
    if (option) {
      res.status(200).send(option);
    } else {
      res.status(401).send("option not found !");
    }
  } catch (error) {
    res.status(500).json("erreur serveur");
  }
};

exports.addOption = async (req, res) => {
  try {
    const option = await options.create(req.body);
    res.status(200).send(option);
  } catch (error) {
    res.status(500).send("erreur serveur");
  }
};

exports.updateOption = async (req, res) => {
  try {
    await options.findByIdAndUpdate(req.params.id, req.body);
    const updatedOption = await options.findById(req.params.id);
    res.status(200).send(updatedOption);
  } catch (error) {
    res.status(500).send("erreur serveur");
  }
};

exports.deleteOption = async (req, res) => {
  try {
    const deletedOption = await options.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedOption);
  } catch (error) {
    res.status(500).send("erreur serveur");
  }
};
