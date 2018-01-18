var express = require('express');
var path = require('path');
var controller = require('./routes/ApiController');
var app = expresss();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', controller);

app.listen(5000);

module.exports = app;