var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var sensor = require('./routes/sensor');
var main = require('./routes/main');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.on('close', function () {

});


app.set('port', process.env.PORT || 8033);
app.set('jsonp callback', true );
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({ resave: true,
  saveUninitialized: true,
  secret: '@ppr3nd@' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//auth
//passport.use(auth.localStrategy);
//passport.serializeUser( auth.serializeUser);
//passport.deserializeUser( auth.deserializeUser);


app.get('/', main.start);
app.get('/sensor/update/:sid/:val', sensor.update);

app.use(function(err, req, res, next){
  console.log(err);
  res.status(500).send({ error: err });
});

var server = http.createServer(app);
var io = require('socket.io')(server);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


