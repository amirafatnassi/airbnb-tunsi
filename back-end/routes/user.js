const express = require("express");
const passport = require("passport");
const {
  login,
  forgetPassword,
  resetPassword,
  register,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../Controllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get(
  "/profile",
  passport.authenticate("bearer", { session: false }),
  function (req, res) {
    res.send(req.user);
  }
);

router.get("/", passport.authenticate("bearer", { session: false }), getUsers);
router.get(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  getUser
);
router.put(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  updateUser
);
router.delete(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  deleteUser
);

router.post("/forget-password", forgetPassword);
router.put("/reset-password", resetPassword);

module.exports = router;
