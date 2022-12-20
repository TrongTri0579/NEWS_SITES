const db = require("../utils/db");

const TBL_TAG = "tags";

module.exports = {
  all: () => {
    return db.load(`select * from ${TBL_TAG}`);
  },
};
