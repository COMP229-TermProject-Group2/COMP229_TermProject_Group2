const mongoose = require("mongoose");

const tournamentModel = mongoose.Schema(
  {
    Name: String,
    Organizer: String,
    Size: Number,
    Date: String,
  },
  {
    collection: "tournaments",
  }
);
