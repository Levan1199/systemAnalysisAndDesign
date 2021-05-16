var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
    name:{
        type:String,
        default:''
    },
    admin:{
        type: Boolean,
        default: false
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    retailer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Retailer'
    },
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Supplier'
    },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);