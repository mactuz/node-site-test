const express = require("express");
const res = require("express/lib/response");
require("dotenv").config();
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.data = { current_time: new Date().toTimeString() };
  next();
});

app.get("/", function (req, res) {
  res.render("index", {
    title: "Node Express site",
    message: "Message for you!",
  });
});
app.get("/account", function (req, res) {
  res.render("account", {
    title: "Account settings",
    message: "Message for you!",
  });
});

app.listen(process.env.PORT, function () {
  msg = "Hello World app listening on port " + process.env.PORT + "!";
  if (process.env.NODE_ENV == "development") {
    msg += `\nDev environment: http://localhost:${process.env.PORT}`;
  } else {
    msg += `\nProduction environment!`;
  }
  console.log(msg);
});
