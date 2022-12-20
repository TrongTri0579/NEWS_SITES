const express = require("express");
const categoryModel = require("../models/category.model");
const postModel = require("../models/post.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const listTopView = await postModel.topView(10);
  const listTopWeek = await postModel.topWeek(3);
  const listTopNewPost = await postModel.topNewPost(10);
  const listTopOfEachCate = await postModel.topPostOfEachCategories(10);
  res.render("vwCategories/home", {
    topView: listTopView,
    topWeek: listTopWeek,
    topNewPost: listTopNewPost,
    topPostOfEachCategories: listTopOfEachCate,
  });
});

router.get("/post/:postsId", async (req, res) => {
  const rows = await postModel.single(req.params.postsId);
  res.render("vwCategories/post", {
    post: rows[0],
  });
});

module.exports = router;
