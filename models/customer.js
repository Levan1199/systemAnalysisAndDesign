var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var Customer = new Schema({
    username:{
        type: String,
        default:''
    },
  
});


module.exports = mongoose.model('Customer', Customer);