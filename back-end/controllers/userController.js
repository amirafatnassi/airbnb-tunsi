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

    if (!user) {
      res.status(400).send({ message: "user does not exist !" });
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
    const link = `${process.env.CLIENT_URL}users/passwordReset?token=${resetToken}&id=${user._id}`;

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
    res.status(200).send({ message: "link sent successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const user = await users.findOne({ email: req.body.email });

    if (!user) throw new Error("User does not exist");
    else {
      const token = await tokens.findOne({ userId: user._id });
      if (token) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        await users.findByIdAndUpdate(token.userId, { password: hash });
        res.status(200).send({ message: "password updated" });
      } else {
        res.status(400).send({ message: "token invalid" });
      }
    }
  } catch (error) {
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