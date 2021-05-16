var mongoose = require('mongoose');
const retailerReport = require('./retailerReport');
var Schema = mongoose.Schema;


var Retailer = new Schema({
    name:{
        type: String,
        default:''
    },
    location:{
        type: String,
        default:''
    },
    manager_id:{
        type:String,
        default:''
    },
    
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Supplier'
    },
    retailerReport:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RetailerReport'
    },
    employee:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    }]

});


module.exports = mongoose.model('Retailer', Retailer);