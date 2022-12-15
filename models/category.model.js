const db = require("../utils/db");

const TBL_CATEGORIES = "categories";
const TBL_DT_CATEGORIES = "detail_categories";
module.exports = {
  all: () => {
    return db.load(`select * from ${TBL_CATEGORIES}`);
  },
  single: function (id) {
    return db.load(`select * from ${TBL_CATEGORIES} where catID = ${id}`);
  },
  detailCategories: (id) => {
    return db.load(`SELECT * FROM ${TBL_DT_CATEGORIES} WHERE catID = ${id}`);
  },
};