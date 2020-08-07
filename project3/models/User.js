
const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 128,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("User", userSchema);