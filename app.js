const express = require("express");
require("express-async-errors");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("views", "./views");
app.use("/public", express.static("public"));

require("./middleware/view.mdw")(app);
require("./middleware/locals.mdw")(app);

app.use("/", require("./routes/_category.router"));

app.use("/categories", require("./routes/_category.router"));
app.use("/account", require("./routes/_account.router"));
app.use("/posts", require("./routes/_post.router"));

app.use(function (req, res) {
  res.render("404", { layout: false });
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).render("500", { layout: false });
});

const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});
