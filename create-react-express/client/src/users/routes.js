const express = require("express");
const router = express.Router();
const controller = require('./controller');
// const { catchErrors } = require("../utils/errorHandlers");
const { protect } = require('./middleware');


router.post("/signup", userCtrl.signup);
router.post("/signin", catchErrors(userCtrl.signin));
router.get("/:userId", protect, catchErrors(userCtrl.getUser));

module.exports = router;