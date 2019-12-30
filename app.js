const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./routes");
const app = express();
const logger = require('morgan');

app.use(logger('dev'))
app.use(bodyParser.json());
app.use("/api", routes);

module.exports = app