const router = require("express").Router();

router.get("/", (req, res) => {
    // token payload information
  res.json({
    error: null,
    data: {
      title: "My dashboard",
      content: "dashboard content",
      user: req.user,
    },
  });
});

module.exports = router;