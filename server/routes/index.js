const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Landing Page" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Landing Page" });
});

//My code




//My code



module.exports = router;
