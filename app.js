var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*
 * Importing router methods.
*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/*
 * Creating the express application
*/
var app = express();

/*
 * Defining what the express app can use.
*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Specifically defining the routers used by the app (like apirouter, for instance)
*/
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
