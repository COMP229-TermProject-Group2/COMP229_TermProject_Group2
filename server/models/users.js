const mongoose = require("mongoose");

const usersModel = mongoose.Schema(
  {
    Username: String,
    Password: String
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model('usersModel', usersModel);