const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const userModel = require("../models/users");
const User = userModel.usersModel;


module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : '' });
}

/////////////////////I've made it to test the routes. can be deleted

module.exports.displayLoginPage = (req, res, next) => {

    if (!req.user) {
        res.render('auth/login', 
        {
            title: "Login", 
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    } else {
        return res.redirect('/');
    }
}


module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
        //server err?
        if (err) {
            return next(err);
        }
        //Is there a user login error?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server error?
            if (err) {
                return next(err);
            }
            return res.redirect('/tournaments');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    if(!req.user) {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    //instantiate an user object
    const newUser = new User({
        username: req.body.username,
        //password: req.body.password
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err) {
            console.log("Error: Inserting New User");
            console.log(err);
            if(err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''              
            });
        } else {
            // if no error exists, then registration is successful
            //redirect the user and authentication them
            
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/tournaments')
                
            });
        }
    });
    
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
