    var express  = require('express');
    var app      = express();                 
    var path = require('path');              
    var mongoose = require('mongoose');       
    var bodyParser = require('body-parser'); 
    var cors = require('cors');

    app.listen(1714);
    console.log("App listening on port 1714");

    const route = require('./routes/route');

    app.use(cors());

    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname,'APP')));

    app.use('/', route);

// mongoose configuration =================

    mongoose.connect('mongodb://127.0.0.1:27017/review', { useNewUrlParser: true });     // connect to mongoDB database 

    let db = mongoose.connection;

    db.once('open',function(){
        console.log('Database connected');
    });

    db.on('error',function(err){
        console.log(err);
    });

  

