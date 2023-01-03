const users = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

exports.register = async (req, res) => {
  try {
    const result = await users.findOne({ email: req.body.email });
    console.log(result);
    if (result) {
      res.status(400).send({ message: "email déjà existant !" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash;
      users.create(req.body);
      res.status(201).send({ message: "user created successfully !" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await users.findOne({ email: req.body.email });
    if (!result) {
      res.status(400).send({ message: "email n'existe pas !" });
    } else {
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        result.password
      );
      if (checkPassword) {
        const data = { userId: result._id, userEmail: result.email };
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

exports.forgetPassword = async (req, res) => {
  try {
    const user = await users.findOne({ email: req.body.email });
    if (user) {
      const resetToken = randomString.generate(10);
      const reset = {
        userId: user._id,
        token: resetToken,
      };
      await Token.create(reset);
      const link = `${process.env.protocol}resetPassword/${resetToken}`;

      let transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        secure: false,
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
      });

      await transporter.sendMail({
        from: `${process.env.email}`,
        to: `${req.body.email}`,
        subject: "Airbnb tunsi: Reset password",

        html: `<h1>Hi, ${req.body.firsName} ${req.body.lastName} </h1> 
      <p> You requested to reset your password,
      Please click the link below </p> <br>
       <a href="${link}">reset link</a>
       <small style="color:red">This link is valid for 15minutes and one time usage.<small>
      <p>Ignore if you didn't request this.</p>`,
      });
      res.status(200).send({ message: "link sent successfully" });
    } else {
      res.status(400).send({ message: `user not found!` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};


exports.resetPassword = async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.token });
    console.log(token.userId);
    if (token) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      await Compte.findByIdAndUpdate(
        token.userId,
        { password: req.body.password, passwordHashed: hash },
        { new: true }
      );
      res.status(200).send({ message: "password updated" });
    } else {
      res.status(400).send({ message: "token invalid" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "An error occured" });
  }
};
