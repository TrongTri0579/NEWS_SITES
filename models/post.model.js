const db = require("../utils/db");

const TBL_POSTS = "posts";
const TBL_DT_CATEGORIES = "detail_categories";

module.exports = {
  all: () => {
    return db.load(`select * from ${TBL_POSTS}`);
  },
  single: (id) => {
    return db.load(`select * from ${TBL_POSTS} p where p.postsID = ${id}`);
  },
  allByCate: (id) => {
    return db.load(
      `SELECT * FROM ${TBL_POSTS} p join ${TBL_DT_CATEGORIES} dt on dt.detailID = p.catID WHERE dt.catID = '${id}';`
    );
  },
  allByDetailCate: (id) => {
    return db.load(
      `SELECT * FROM ${TBL_POSTS} p join ${TBL_DT_CATEGORIES} dt on dt.detailID = p.catID WHERE dt.detailID = '${id}'`
    );
  },
  topView: (top) => {
    return db.load(
      `SELECT * FROM ${TBL_POSTS} p , ${TBL_DT_CATEGORIES} dt WHERE p.catID = dt.detailID AND p.status = 1 ORDER BY p.views DESC LIMIT ${top}`
    );
  },
  topWeek: (top) => {
    return db.load(
      `SELECT * 
       FROM ${TBL_POSTS} p ,${TBL_DT_CATEGORIES} dt 
       WHERE p.catID = dt.detailID AND DATEDIFF(CURRENT_DATE(), p.date) < 8 AND p.status = 1 ORDER BY p.views DESC LIMIT 0, ${top};`
    );
  },
  topNewPost: (top) => {
    return db.load(
      `SELECT * FROM ${TBL_POSTS} p ,${TBL_DT_CATEGORIES} dt WHERE p.catID = dt.detailID and p.status = 1 ORDER BY date DESC LIMIT 0, ${top};`
    );
  },
  topPostOfEachCategories: () => {
    return db.load(
      `SELECT * FROM ${TBL_POSTS} p JOIN ${TBL_DT_CATEGORIES} dt on p.catID = dt.detailID and p.status = 1 
        WHERE p.postsID = (SELECT p1.postsID 
                            FROM ${TBL_POSTS} p1 JOIN ${TBL_DT_CATEGORIES} dt1 ON p1.catID = dt1.detailID  
                            WHERE p.catID = p1.catID AND p.status = 1 
                            LIMIT 0,1);`
    );
  },
};
