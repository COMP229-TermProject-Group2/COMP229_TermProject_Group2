const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//This is a reference for the database schema (model)
const Tournament_List = require('../models/tournament');

module.exports.displayTournamentList = (req, res, next) => {
    Tournament_List.find((err, tournamentList) => {
        if(err){
            return console.error(err);
        }
        else{
        
            res.render('/', {title: 'Tournament List', TournamentList: tournamentList});
        }
    });
}