let User = require('../Models/user');
const bcrypt = require('bcrypt');

exports.UserSignup = async function (req, res, next) {
  try {

    req.body.password = await bcrypt.hash(req.body.password, 10)
    let userCreate = await User.create(req.body)

    res.status(200).json({
      status: "Success",
      message: "User Create SuccessFully!",
      data: userCreate

    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

}

exports.UserLogin = async function (req, res, next) {
  try {

    let userFind = await User.findOne({ email: req.body.email })
    if (!userFind) throw new Error("User Not Found!")

    let passwordCompare = await bcrypt.compare(req.body.password, userFind.password)
    if (!passwordCompare) throw new Error("Password Invalid!")


    res.status(200).json({
      status: "Success",
      message: "User Login SuccessFully!",
      data: userFind,

    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

}

exports.UserFind = async function (req, res, next) {
  try {

    let userFind = await User.find()
    console.log(userFind);
    

    res.status(200).json({
      status: "Success",
      message: "User Found SuccessFully!",
      data: userFind,

    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

}

exports.UserDelete = async function (req, res, next) {
  try {

    let userDelete = await User.findById(req.params.id)

    console.log(userDelete);
    

    res.status(200).json({
      status: "Success",
      message: "User Delete SuccessFully!",

    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

}

exports.UserUpdate = async function (req, res, next) {
  try {
    
    req.body.password = await bcrypt.hash(req.body.password, 10)
    let userUpdate = await User.create(req.body)

    res.status(200).json({
      status: "Success",
      message: "User Update SuccessFully!",
      data : userUpdate
    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

}