const db = require("../utils/db");

const TBL_COMMENTS = "comments";
const TBL_ACCOUNT = "account";
module.exports = {
  getView: (id) => {
    return db.load(
      `select count(*) as num_of_comment from ${TBL_COMMENTS} where postID = ${id}`
    );
  },

  allByPostsID: (id) => {
    return db.load(`select distinct c.postID,c.accID,c.STT,c.date,c.content,a.avatar, a.fullname
                from ${TBL_COMMENTS} c, ${TBL_ACCOUNT} a
                where c.accID = a.accID and postID="${id}"`);
  },
};
