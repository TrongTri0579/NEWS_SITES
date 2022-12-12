const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Home");
});

const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});
