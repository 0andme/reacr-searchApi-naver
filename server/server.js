var express = require("express");

var indexRouter = require("./routes/index");
var searchRouter = require("./routes/searchKeyword");
var shopRouter = require("./routes/searchItem");

var app = express();

app.use("/", indexRouter);
app.use("/search", searchRouter);
app.use("/shop", shopRouter);

module.exports = app;
