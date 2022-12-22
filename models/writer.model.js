const db = require("../utils/db");

const TBL_WRITER = "writer";
const TBL_ACCOUNT = "account";

module.exports = {
  all: () => {
    return db.load(
      `select * from ${TBL_ACCOUNT} where type = 2 order by accID`
    );
  },
  single: (id) => {
    return db.load(
      `SELECT * FROM ${TBL_ACCOUNT} a, ${TBL_WRITER} w WHERE a.accID = w.accID AND a.accID = ${id};`
    );
  },
  allWithPost: (id) => {},
};
