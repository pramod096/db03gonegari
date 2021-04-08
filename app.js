var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect('mongodb+srv://webappsUser:EV4Zk2V7tirip88@cluster0.megis.mongodb.net/family?retryWrites=true',
{useNewUrlParser: true, useUnifiedTopology: true});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var familyRouter = require('./routes/family');
var starsRouter = require('./routes/stars');
var slotRouter = require('./routes/slot');
var family = require("./models/family");
var resourceRouter=require('./routes/resource');
// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await family.deleteMany();
  let instance1 = new family({lastName:"Gonegari",address:"Nizamabad",phoneNumber:9666319694});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  let instance2 = new family({lastName:"Kolluri",address:"Vizag",phoneNumber:8309839216});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });
  let instance3 = new family({lastName:"Pasupula",address:"Hyderabad",phoneNumber:7288857768});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/family', familyRouter);
app.use('/stars', starsRouter);
app.use('/slot', slotRouter);
app.use('/resource',resourceRouter)
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


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
module.exports = app;

