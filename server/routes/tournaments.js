const express = require("express");
const router = express.Router();

const tournament_listController = require("../controllers/tournament_list");
const bracket_controller = require("../controllers/bracket");

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

//GET Route for the tournament_list page - READ Operation
router.get("/", tournament_listController.displayTournamentList);

//GET Route for displaying the Add page
router.get("/add", requireAuth, tournament_listController.displayAddPage);

//GET Route for processing the Add page - CREATE Operation
router.post("/add", requireAuth, tournament_listController.processAddPage);

//GET Route for displaying the Edit page - UPDATE Operation
router.get("/edit/:id", requireAuth, tournament_listController.displayEditPage);

//POST Route for processing the Edit page - UPDATE Operation
router.post(
  "/edit/:id",
  requireAuth,
  tournament_listController.processEditPage
);

//GET Route to perform Deletion - DELETE Operation
router.get("/delete/:id", requireAuth, tournament_listController.performDelete);

//GET Route for displaying the Tournament Brackets page
router.get(
  "/brackets/:id",
  requireAuth,
  tournament_listController.displayBrackets
);

//GET Route for displaying the Register Players page
router.get(
  "/registerPlayer/:id",
  tournament_listController.displayRegisterPlayers
);

//POST Route for processing the Register Players page
router.post(
  "/registerPlayer/:id",
  tournament_listController.processRegisterPlayers
);

//POST Route for processing Bracket Winners
router.post(
  "/registerPlayer/:id",
  requireAuth,
  bracket_controller.processWinners
);

module.exports = router;
