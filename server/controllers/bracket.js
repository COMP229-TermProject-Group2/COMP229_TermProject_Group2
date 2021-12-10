//We don't have to do it this way, but it might be better if we seperate the logic for the bracket and the tournament.
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Tournament = require("../models/tournament");

module.exports.processWinners = (req, res, next) => {
  let id = req.params.id;

  Tournament.updateMany(
    { _id: id },
    { $push: { Winners: req.body.winners } },
    (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect("/tournaments");
      }
    }
  );
};
