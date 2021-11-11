const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//This is a reference for the database schema (model)
let Tournament_List = require('../models/tournament');

module.exports.displayTournamentList = (req, res, next) => {
    Tournament_List.find((err, tournamentList) => {
        if(err){
            return console.error(err);
        }
        else{
            /*Waiting on the view for the tournament list to finish this next line.
            res.render('', {title: 'Tournament List', TournamentList: tournamentList})*/
        }
    })
}