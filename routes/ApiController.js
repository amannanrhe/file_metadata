var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');
var upload = multer({dest: path.resolve(__dirname, '../uploads/')});

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.post('/upload', upload.single('uploadata'), function(req, res, next){
    res.send({size:req.file.size + ' bytes'});
});

module.exports = router;