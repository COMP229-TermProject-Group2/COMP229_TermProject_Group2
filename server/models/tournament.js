const mongoose = require("mongoose");

const tournamentModel = mongoose.Schema(
  {
    Name: String,
    Organizer: String,
    Description: String,
    Size: Number,
    Date: String,
    Active: Boolean
  },
  {
    collection: "tournaments",
  }
);

module.exports = mongoose.model('tournamentModel', tournamentModel);