var mongoose = require('mongoose');  

var listSchema = mongoose.Schema({
    code: String, 
    name: String, 
    description: String, 
    rating: Array, 
    comments: Array
})


const List = module.exports = mongoose.model('list',listSchema);