const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const usersModel = mongoose.Schema(
  {
    username: {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    },
    displayName: {
        type: String,
        default: "",
        trim: true,
        required: "display name is required"
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: "users"
    }
);

const options = ({ missingPasswordError: 'Wrong / Missing Password'});

usersModel.plugin(passportLocalMongoose, options);

module.exports.usersModel = mongoose.model('usersModel', usersModel);