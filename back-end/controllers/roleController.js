const roles = require("../models/role");

exports.getRoles = async (req, res) => {
  try {
    const result = await roles.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json("erreur serveur");
  }
};

exports.getRole = async (req, res) => {
  try {
    const role = await roles.findById(req.params.id);
    if (role) {
      res.status(200).send(role);
    } else {
      res.status(401).send("role not found !");
    }
  } catch (error) {
    res.status(500).json("erreur serveur");
  }
};

exports.addRole = async (req, res) => {
  try {
    const role = await roles.create(req.body);
    res.status(200).send(role);
  } catch (error) {
    res.status(500).send("erreur serveur");
  }
};

exports.updateRole = async (req, res) => {
  try {
    await roles.findByIdAndUpdate(req.params.id, req.body);
    const updatedRole = await roles.findById(req.params.id);
    res.status(200).send(updatedRole);
  } catch (error) {
    res.status(500).send("erreur serveur");
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const deletedRole = await roles.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedRole);
  } catch (error) {
    res.status(500).send("erreur serveur");
  }
};
