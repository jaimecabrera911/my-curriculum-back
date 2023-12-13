const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require("path");
const indexRouter = require('./routes/index');
const favicon = require("serve-favicon");

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
