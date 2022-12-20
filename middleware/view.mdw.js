const exphbs = require("express-handlebars");
const hbs_sections = require("express-handlebars-sections");

module.exports = (app) => {
  app.engine(
    "hbs",
    exphbs.engine({
      extname: "hbs",
      layoutsDir: "views/_layouts",
      defaultLayout: "main.hbs",
      partialsDir: "views/_partials",
      helpers: {
        section: hbs_sections(),
        compareCatID: (value1, value2, options) => {
          return value1 == value2 ? options.fn(this) : options.inverse(this);
        },
      },
    })
  );
  app.set("view engine", "hbs");
};
