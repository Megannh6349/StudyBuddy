  
const mongoose = require("mongoose");
const User = mongoose.model("User");

//  implementation of JSON Web Tokens.
const jsonwebtoken = require("jsonwebtoken");

require("dotenv").config();
const jsonwebtoken_secret = process.env.JWT_SECRET;

const User = mongoose.model("User");

//   If a callback is supplied, the callback is called with the err
const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).end();
  }
  const token = bearer.split("Bearer ")[1].trim();
  try {
    const payload = await jsonwebtoken.verify(token, jsonwebtoken_secret);
    const user = await User.findById(payload._id).select({ password: 0 });
    req.user = user.toJSON();
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).end();
  }
};

module.exports = {
  protect
};