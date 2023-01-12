const express=require("express");
const passport=require('passport');
const { login, forgetPassword, resetPassword, register, getUsers, getUser, updateUser, deleteUser} = require("../Controllers/userController");
const router=express.Router();

router.post('/register',register);
router.post('/login',login);

router.get('/profile', 
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.send(req.user);
  });

router.get('/',getUsers);
router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

router.post('/forget-password',forgetPassword);
router.put('/reset-password',resetPassword);

module.exports=router;