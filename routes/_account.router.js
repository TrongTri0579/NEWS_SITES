const express = require("express");
const accountModel = require("../models/account.model");
const router = express.Router();

router.get("/login", async (req, res) => {
  res.render("vwAccount/login", {
    layout: false,
  });
});

router.get("/register", async (req, res) => {
    res.render("vwAccount/register", {
      layout: false,
    });
  });


module.exports = router