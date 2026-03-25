//Handles the routes for the login

const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController"); //needs thr authController for the login logic

//types of requests
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;