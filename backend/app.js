const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first middlewar');
  next();
});

app.use((req, res, next) => {
  res.send('hello f exp');
});

module.exports = app;
