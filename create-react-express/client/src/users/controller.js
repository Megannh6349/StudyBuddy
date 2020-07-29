const mongoose = require('mongoose');
const User = mongoose.model('User');

// signup function
    exports.signup = async (req, res) => {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).end();
        }

        try {
            const user = await User.create(req.body);
            const token = user.newToken();
            return res.status(200).send(token);
        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).send({ email: "This address is used already!" });
            } else {
                return res.status(500).end();
            }
        }
    };

// signin function
    exports.signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
          return res.status(400).end();
        }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({ email: "Email was not found!" });
        }

        const match = await user.checkPassword(req.body.password);
        if (!match) {
            return res.status(401).send({ password: "Incorrect password!" });
        }

        const token = user.newToken();
        return res.status(200).send(token);
    };

// and function for geting the profile after signing in
    exports.getUser = async (req, res) => {
        const user = await User.findOne({ _id: req.params.userId }).select({
            password: 0
        });
        if (!user) {
        return res.status(400).end();
        }
  
        res.status(200).send(user);
    };