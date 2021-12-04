const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Tournament = require("../models/tournament");

module.exports.displayTournamentList = (req, res, next) => {
  Tournament.find((err, TournamentList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("tournament/list", {
        title: "Tournament List",
        displayName: req.user ? req.user.displayName : "",
        TournamentList,
      });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("tournament/add", {
    title: "Add Tournament",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newTournament = Tournament({
    Name: req.body.name,
    Organizer: req.body.organizer,
    Description: req.body.description,
    Size: req.body.size,
    Date: req.body.date,
    Active: req.body.active,
  });

  Tournament.create(newTournament, (err, Tournament) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/tournaments");
    }
  });
};
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Tournament.findById(id, (err, TournamentToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("tournament/edit", {
        title: "Edit Tournament",
        displayName: req.user ? req.user.displayName : "",
        Tournament: TournamentToEdit,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedTournament = Tournament({
    _id: id,
    Name: req.body.name,
    Organizer: req.body.organizer,
    Description: req.body.description,
    Size: req.body.size,
    Date: req.body.date,
    Active: req.body.active,
  });

  Tournament.updateOne({ _id: id }, updatedTournament, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/tournaments");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Tournament.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/tournaments");
    }
  });
};
