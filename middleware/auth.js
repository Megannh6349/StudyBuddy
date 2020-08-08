
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
// const app = require('../src/App')

// router.get("/", (req, res) =>{
//     res.send(app)
// })

//   ---> validation 
const { registerValidation, loginValidation } = require('../validation');

// ---->register route
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

    // checking if email already exists in our database
    const isEmailExist = await User.findOne({ email: req.body.email });
    if(isEmailExist){
        return res.status(400).json({error: "Email already exists"});
    }

    //  ---> hashing the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    //  ---> we are using our user model to add user to our database
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password,
    });

    try {
      const savedUser = await user.save();
      console.log(savedUser)
      res.json({ error: null, data: { userId: savedUser._id } });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  // ----> login route
  router.post("/login", async (req, res) => {

    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ error:   error.details[0].message });
    const user = await User.findOne({ email: req.body.email });

    // throw error when email is wrong
    if (!user) return res.status(400).json({ error: "Email is wrong" });

  // check for password correctness
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).json({ error: "Password is wrong" });

    // ---->  create JSON Web Token
    const token = jwt.sign(
        // payload data
    {
        name: user.name,
        id: user._id,
      },
      process.env.TOKEN_SECRET
    );

    // res.json({
    //     error:null,
    //     data: {
    //         message: 'Login successful',
    //     },
    // });

    res.header('auth-token', token).json({
        error: null,
        data: {
            token,
        },
    });
  });

module.exports = router;