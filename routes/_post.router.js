const express = require("express");
const postModel = require("../models/post.model");
const router = express.Router();

router.get("/byPost", async (req, res) => {
  const listTopView = await postModel.topView(10);
  const listTopWeek = await postModel.topWeek(5);
  const listTopNewPost = await postModel.topNewPost(10);
  const listTopOfEachCate = await postModel.topPostOfEachCategories(10);
  res.render("vwCategories/post", {
    topView: listTopView,
    topWeek: listTopView,
    topNewPost: listTopNewPost,
    topPostOfEachCategories: listTopOfEachCate,
  });
});

module.exports = router;
