const UserModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please Fill the fields",
      });
    }
    const userEmail = await UserModel.findOne({ email });
    if (userEmail) {
      res.status(409).json({
        message: "Email is already in use.",
      });
    }
    const user = await UserModel.create({
      fullName,
      email,
      password,
    });
    res.status(200).json({
      success: true,
      message: "Account Created Successfully",
      user: user.fullName,
    });
  } catch (err) {
    console.log("Error in Signing Up the User", err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    const user = await UserModel.findOne({ email });
    console.log(user, "user");
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    // const payload = {
    //   iat: parseInt(Date.now() / 1000),
    //   userId: user._id,
    //   name: user.firstName,
    //   exp: parseInt(Date.now() / 1000) + 86400,
    // };
    const token = jwt.sign(
      { userId: user._id, name: user.fullName },
      SECRET_KEY,
      { expiresIn: "24h" }
    );
    return res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({
        success: true,
        message: `Welcome Back ${user.fullName}`,
        token,
        user,
      });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", { expiresIn: new Date(Date.now()) })
      .json({ success: true, message: "Logged out" });
  } catch (err) {
    console.log("Error in logging out the user");
  }
};

module.exports = { registerUser, loginUser, logoutUser };
