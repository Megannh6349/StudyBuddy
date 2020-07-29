const mongoose = require("mongoose");

// is gonna hash users password
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

require("dotenv").config();
const jsonwebtoken_secret = process.env.JWT_SECRET;
const jsonwebtoken_expiry_time = "3h";

//setting up our schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
};

userSchema.methods.newToken = function() {
  return jsonwebtoken.sign({ _id: this._id }, jsonwebtoken_secret, {
    expiresIn: jsonwebtoken_expiry_time
  });
};

mongoose.model("User", userSchema);