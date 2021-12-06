const express = require("express");
const router = express.Router();

const tournament_listController = require('../controllers/tournament_list');

function requireAuth(req, res, next) {
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

//GET Route for the tournament_list page - READ Operation
router.get('/', tournament_listController.displayTournamentList);

//GET Route for displaying the Add page 
router.get('/add', requireAuth, tournament_listController.displayAddPage);

//GET Route for processing the Add page - CREATE Operation
router.post('/add', requireAuth, tournament_listController.processAddPage);

//GET Route for displaying the Edit page - UPDATE Operation
router.get('/edit/:id', requireAuth, tournament_listController.displayEditPage);

//POST Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', requireAuth, tournament_listController.processEditPage); 

//GET Route to perform Deletion - DELETE Operation
router.get('/delete/:id', requireAuth, tournament_listController.performDelete);

module.exports = router;