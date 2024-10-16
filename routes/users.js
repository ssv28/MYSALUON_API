var express = require('express');
var router = express.Router();

let UserController = require("../Controller/User")


//SIGN UP
router.post('/signup', UserController.UserSignup);

//LOG IN
router.post('/login', UserController.UserLogin);

//All USER
router.get('/all', UserController.UserFind);

//USER DELETE
router.delete('/delete/:id', UserController.UserDelete);

//USER UPDATE
router.patch('/update/:id', UserController.UserUpdate);

module.exports = router;
