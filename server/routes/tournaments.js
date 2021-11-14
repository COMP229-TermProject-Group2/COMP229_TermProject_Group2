const express = require("express");
const router = express.Router();

const tournament_listController = require('../controllers/tournament_list');

/*
// /* GET Tournaments page. */
// router.get("/", (req, res, next) => {
//   res.render("tournament/list", { title: "Tournaments List" });
// });

// /* GET Tournaments Add page. */
// router.get("/add", (req, res, next) => {
//   res.render("tournament/add", { title: "Add a Tournament" });
// });

// /* GET Tournaments Edit page. */
// router.get("/edit", (req, res, next) => {
//   res.render("tournament/edit", { title: "Edit a tournament" });
// });


/////////////////



//GET Route for the tournament_list page - READ Operation
router.get('/', tournament_listController.displayTournamentList);

//GET Route for displaying the Add page 
router.get('/add', tournament_listController.displayAddPage);

//GET Route for processing the Add page - CREATE Operation
router.post('/add', tournament_listController.processAddPage);

//GET Route for displaying the Edit page - UPDATE Operation
//router.get('/edit/:id', tournament_listController.displayEditPage);

//POST Route for processing the Edit page - UPDATE Operation
//router.post('/edit:id', tournament_listController.processEditPage); <- (Nick) I changed router.get to router.post (pretty sure that is what we are supposed to use here, did so for midterm + assignment and this was not a mistake for me).

//GET Route to perform Deletion - DELETE Operation
//router.get('/delete:id', tournament_listController.performDelete); <- (Nick) I changed router.post to router.get (pretty sure that is what we are supposed to use here, did so for midterm + assignment and this was not a mistake for me).






module.exports = router;
