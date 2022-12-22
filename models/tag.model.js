const db = require("../utils/db");

const TBL_TAG = "tags";

module.exports = {
  all: () => {
    return db.load(`select * from ${TBL_TAG}`);
  },
  single: (id) => {
    return db.load(`select * from ${TBL_TAG}  where tagID = ${id}`);
  },
  allWithPost: (id) => {},
};
