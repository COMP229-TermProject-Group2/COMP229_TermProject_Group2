const express = require("express");
const router = express.Router();

const indexController = require('../controllers/index');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Landing Page" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});




//Authentication:
//GET Route for processing the login page
router.get('/login', indexController.displayLoginPage);

//GET Route for processing the Login page
router.post('/login', indexController.processLoginPage);

//GET Route for processing the Register page
router.get('/register', indexController.displayRegisterPage);

//POST route for processing the Register page
router.post('/register', indexController.processRegisterPage);

//GET to perform UserLogout
router.get('/logout', indexController.performLogout);


module.exports = router;