var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.post('/upload', function(req, res, next){
    
});

module.exports = router;