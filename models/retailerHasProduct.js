var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RetailerHasProduct = new Schema({
    amount:{
        type: String,
        default:''
    },
    unit:{
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
    },
    date:{
        type:String,
        default:''
    }
},{
    timestamps: true
});


module.exports = mongoose.model('RetailerHasProduct', RetailerHasProduct);