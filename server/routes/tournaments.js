const express = require("express");
const router = express.Router();

/* GET Tournaments page. */
router.get("/", (req, res, next) => {
  res.render("tournament/tournaments_list", { title: "Tournaments List" });
});

/* GET Tournaments Add page. */
router.get("/add", (req, res, next) => {
  res.render("tournament/add", { title: "Add a Tournament" });
});

/* GET Tournaments Edit page. */
router.get("/edit", (req, res, next) => {
  res.render("tournament/edit", { title: "Edit a tournament" });
});

module.exports = router;
