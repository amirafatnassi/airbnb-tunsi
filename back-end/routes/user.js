const express=require("express");
const passport=require('passport');
const { updateUser, resetPassword } = require("../Controllers/userController");
const { login } = require("../Controllers/userController");
const { register } = require("../Controllers/userController");
const router=express.Router();

router.post('/register',register);
router.post('/login',login);

router.get('/profile', 
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  });

router.get('/reset-password',resetPassword);

module.exports=router;