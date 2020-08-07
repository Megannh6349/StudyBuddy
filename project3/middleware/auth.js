
const router = require("express").Router();
const User = require("../models/User");
//   validation 
// const Joi = require('@hapi/joi');

// const schema = Joi.object({
//     name: Joi.string().min(6).max(255).required(),
//     email: Joi.string().min(6).max(255).required().email(),
//     password: Joi.string().min(8).max(128).required(),
//   });
const {registerValidation} = require('../validation');

router.post("/register", async (req, res) => {
    // ---> testing  our api
    // res.send("Register");
    //  ----> we are validating the user
    // const validation =  schema.validate(req.body);
    // res.send(validation);
    const {error} = registerValidation(req.body);
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    //  ---> we are using our user model to add user to our database
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    try {
      const savedUser = await user.save();
      console.log(savedUser)
      res.json({ error: null, data: savedUser });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

module.exports = router;