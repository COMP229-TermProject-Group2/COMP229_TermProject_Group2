//We don't have to do it this way, but it might be better if we seperate the logic for the bracket and the tournament.
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Bracket = require("../models/bracket");