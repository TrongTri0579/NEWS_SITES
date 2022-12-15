const db = require('../utils/db');

const TBL_ACCOUNT = "account";

module.exports = {
    all: ()=>{
        return db.load(`select * from ${TBL_ACCOUNT}`);
    }
};