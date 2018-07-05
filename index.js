//Root file
const express = require('express'); // <---- common js modules ON SERVER SIDE
// import express from 'express'; //alternative. module system called ES2015 modules

const app = express();

app.get('/', (req, res) => {
  // creates a brand new route handler for get reqs. post/put/delete/patch
  // res.send("<body style='background-color: #EEE;'></body>"); // { hi: 'there' }
  res.send({ hi: 'there' }); // { hi: 'there' }
});

const PORT = process.env.PORT || 5000; // grabs the var from heroku
app.listen(PORT); //5000 for local dev work.
