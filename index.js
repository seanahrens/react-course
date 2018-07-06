const keys = require('./config/keys');

const express = require('express'); // <---- common js modules ON SERVER SIDE
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); // import express from 'express'; //alternative. module system called ES2015 modules

// cookie stuff
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; // grabs the var from heroku
app.listen(PORT); //5000 for local dev work.
