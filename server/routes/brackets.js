const express = require("express");
const router = express.Router();

const bracketController = require("../controllers/bracket");

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

//POST Route for processing Bracket Winners
router.post(
  "/updateBrackets/:id",
  requireAuth,
  bracketController.processWinners
);

module.exports = router;
