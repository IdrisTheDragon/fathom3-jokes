var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExpress = require('mustache-express');

var indexRouter = require('./routes/index');
var jokesRouter = require('./routes/jokes');

var app = express();

//general setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//setup static files
app.use(express.static(path.join(__dirname, 'public')));


//include font awesome icons
app.use('/fontawesome', express.static('./node_modules/@fortawesome/fontawesome-free'))

//setup mustache template engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.set('views', __dirname + '/views');

//routes
app.use('/', indexRouter);
app.use('/api/joke', jokesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
