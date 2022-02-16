const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

//GET Route for processing the login page
router.get("/login", indexController.displayLoginPage);

//GET Route for processing the Login page
router.post("/login", indexController.processLoginPage);

//GET Route for processing the Register page
router.get("/register", indexController.displayRegisterPage);

//POST route for processing the Register page
router.post("/register", indexController.processRegisterPage);

//GET to perform UserLogout
router.get("/logout", indexController.performLogout);

/* GET Contact Us page. */
router.get("/contact", indexController.displayContactPage);

module.exports = router;