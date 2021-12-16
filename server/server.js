var express = require("express");

var indexRouter = require("./routes/index");
var searchRouter = require("./routes/searchKeyword");
var shopRouter = require("./routes/searchItem");
var ChartRouter = require("./routes/getChart");
var SaveItem = require("./routes/saveItem");
var app = express();

app.use("/", indexRouter);
app.use("/search", searchRouter);
app.use("/shop", shopRouter);
app.use("/chart", ChartRouter);
app.use("/save", SaveItem);
module.exports = app;
