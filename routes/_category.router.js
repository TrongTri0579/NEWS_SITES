const express = require("express");
const categoryModel = require("../models/category.model");
const postModel = require("../models/post.model");
const tagModel = require("../models/tag.model");
const commentModel = require("../models/comment.model");
const writerModel = require("../models/writer.model");
const dateTime = require("../public/js/date");
const router = express.Router();

router.get("/", async (req, res) => {
  const cate = await categoryModel.all();
  const detailCate = await categoryModel.allDetailCate();
  const listTopView = await postModel.topView(10);
  const listTopWeek = await postModel.topWeek(3);
  const listTopNewPost = await postModel.topNewPost(10);
  const listTopOfEachCate = await postModel.topPostOfEachCategories(10);

  res.render("vwCategories/home", {
    cate,
    detailCate,
    topView: listTopView,
    topWeek: listTopWeek,
    topNewPost: listTopNewPost,
    topPostOfEachCategories: listTopOfEachCate,
  });
});

router.get("/post/:postsId", async (req, res) => {
  const cate = await categoryModel.all();
  const detailCate = await categoryModel.allDetailCate();
  const rows = await postModel.single(req.params.postsId);
  rows[0].date = dateTime.getDateTime(rows[0].date);
  const writer = await writerModel.single(rows[0].writer);
  const comment = await commentModel.allByPostsID(req.params.postsId);
  console.log(comment);
  res.render("vwCategories/post", {
    cate,
    detailCate,
    post: rows[0],
    author: writer[0],
    num_of_comment: comment.length,
  });
});

router.get("/cate/:catID", async (req, res) => {
  const cate = await categoryModel.all();
  const detailCate = await categoryModel.allDetailCate();
  const listByCate = await postModel.allByCate(req.params.catID);
  const listTopView = await postModel.topView(10);
  res.render("vwCategories/cate", {
    cate,
    detailCate,
    listByCate,
    topView: listTopView,
  });
});

router.get("/detail/:detailID", async (req, res) => {
  const cate = await categoryModel.all();
  const detailCate = await categoryModel.allDetailCate();
  const catName = await categoryModel.detailCategories(req.params.detailID);
  const listByDetailCate = await postModel.allByDetailCate(req.params.detailID);
  const listTopView = await postModel.topView(10);
  res.render("vwCategories/detail", {
    cate,
    detailCate,
    detailName: catName[0],
    listByDetailCate,
    topView: listTopView,
  });
});

module.exports = router;
