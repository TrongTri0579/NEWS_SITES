const categoryModel = require("../models/category.model");

module.exports = (app) => {
  app.use(async function (req, res, next) {
    const rows = await categoryModel.all();
    console.log(rows);
    res.locals.lcCategories = rows;
    next();
  });
};
