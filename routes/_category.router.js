const express = require("express");
const categoryModel = require("../models/category.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const list = await categoryModel.all();

  res.render("vwCategories/list", {
    categories: list,
    empty: list.length === 0,
  });
});

module.exports = router;
