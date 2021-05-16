var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Supplier = new Schema({
    name:{
        type: String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    retailer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Retailer'
    }
});


module.exports = mongoose.model('Supplier', Supplier);