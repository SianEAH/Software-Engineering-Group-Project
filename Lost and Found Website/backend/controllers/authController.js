//Handles the login
//Use exports as it may be needed by Routes

const User = require("../models/User");

//Register
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email }); //check for existing emails

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" }); //return message if email already exists
    }

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: "New account created" });
  } catch (error) {
    res.status(500).json({ error: error.message }); //error message
  }
};

//Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password }); //find the email+password
    //if the credentials don't match, show a message
    if (!user) {
      return res.status(400).json({ message: "Cannot locate user details" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message }); //error message
  }
};