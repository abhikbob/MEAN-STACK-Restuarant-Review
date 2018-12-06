var express  = require('express');
var router = express.Router();

var List = require('../models/list');

router.get('/list',function(req,res){
    List.find(function(err,list){
        res.send(list);
        data = list;

    });
});


router.post('/addComment',function(req,res){
    res.sendStatus(200);
    List.findOneAndUpdate({code:req.body.code}, {$push:{rating:req.body.rating ,comments: req.body.comment}},(err, result) => {
    console.log(err);
    console.log(result);
});    
});

module.exports = router;