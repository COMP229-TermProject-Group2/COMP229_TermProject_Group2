const express = require("express");
const router = express.Router();

const bracketController = require("../controllers/bracket");

//POST Route for processing Bracket Winners
router.post(
  "/updateBrackets/:id",
  requireAuth,
  bracketController.processWinners
);

module.exports = router;
