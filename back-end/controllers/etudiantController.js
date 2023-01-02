const etudiants = require("../models/etudiant");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const result = await etudiants.findOne({ email: req.body.email });
    console.log(result);
    if (result) {
      res.status(400).send({ message: "email déjà existant !" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash;
      etudiants.create(req.body);
      res.status(201).send({ message: "etudiant created successfully !" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await etudiants.findOne({ email: req.body.email });
    if (!result) {
      res.status(400).send({ message: "email n'existe pas !" });
    } else {
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        result.password
      );
      if (checkPassword) {
        const data = { etudiantId: result._id, etudiantEmail: result.email };
        const token = jwt.sign(data, process.env.JWTKEY, { expiresIn: "1h" });
        res.send({ token });
      } else {
        res.status(400).send({ message: "password don't match" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateEtudiant = async (req, res) => {
  try {
    const result = await etudiants.findById(req.params.id);
    if (result) {
      await etudiants.findByIdAndUpdate(req.params.id, req.body);
      const updatedEtudiant = await etudiants.findById(req.params.id);
      res.status(200).send(updatedEtudiant);
    } else {
      res.status(400).send({ message: "email n'existe pas !" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur !" });
  }
};
