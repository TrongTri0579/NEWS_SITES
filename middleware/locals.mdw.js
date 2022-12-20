const categoryModel = require("../models/category.model");

module.exports = (app) => {
  app.use(async function (req, res, next) {
    const rows = await categoryModel.all();
    const detail = await categoryModel.detailCategories();
    res.locals.lcCategories = rows;
    res.locals.lcDetailCategories = detail;
    next();
  });
};
