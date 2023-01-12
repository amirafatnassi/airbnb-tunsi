const users = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const tokens = require("../models/token");

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
      res.status(400).send({ message: "Email n'existe pas !" });
    } else {
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        result.password
      );
      if (checkPassword) {
        const data = { userId: result._id, userEmail: result.email };
        const token = jwt.sign(data, process.env.JWTKEY, { expiresIn: "1d" });
        res.send({ token, message: "logged in successfully" });
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

    if (!user) {
      res.status(400).send({ message: "L'utlisateur n'existe pas !" });
    }
    let token = await tokens.findOne({ userId: user._id });
    if (token) {
      await tokens.deleteOne();
    }
    let resetToken = crypto.randomBytes(32).toString("hex");
    await tokens.create({
      userId: user._id,
      token: resetToken,
    });
    const link = `${process.env.CLIENT_URL}auth/reset-password/${resetToken}`;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: user.email,
      to: process.env.EMAIL,
      subject: "Airbnb tunsi: Password reset request",

      html: `<h1>Hi, ${user.firstName} ${user.lastName} </h1> 
      <p> You requested to reset your password,
      Please click the link below </p> <br>
      <a href="http://${link}">Reset Password</a>
       <p style="color:red">This link is valid for 15minutes and one time usage.<p>
      <small>Ignore if you didn't request this.</small>`,
    });
    res.status(200).send({ message: "un mail a été envoyé !" });
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
      const token = await tokens.findOne({token:req.body.token});
      console.log(token);
      if (token) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        await users.findByIdAndUpdate(token.userId, { password: hash },{new:true});
        res.status(200).send({ message: "password updated" });
      } else {
        res.status(400).send({ message: "token invalid" });
      }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message || "An error occured" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const result = await users.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json("erreur serveur");
  }
};


exports.getUser = async (req, res) => {
  try {
    const user = await users.findById(req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send("user not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};


exports.updateUser = async (req, res) => {
  try {
    await users.findByIdAndUpdate(req.params.id, req.body);
    const updatedUser = await users.findById(req.params.id);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await users.findByIdAndDelete(
      req.params.id
    );
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};
