const mongoose = require("mongoose");

/*These are the temporary values to be stored in the model, we can add/remove as need be. My logic is name is used to compare with the tournament name to ensure it is the right tournament,
organizer is the username we're using to ensure the right person has access, size is required to determine number of rounds, and active is required because the bracket can only start if the
tournament was set to active once it filled. Add more if required (Nick).*/
const bracketModel = mongoose.Schema(
  {
    Name: String,
    Organizer: String,
    Size: Number,
    Active: Boolean
  },
  {
    collection: "brackets",
  }
);

module.exports = mongoose.model('bracketModel', bracketModel);