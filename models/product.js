var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Product = new Schema({
    name:{
        type: String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    buy_price:{
        type:String,
        default:''
    },
    sell_price:{
        type:String,
        default:''
    },
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Supplier'
    }
});


module.exports = mongoose.model('Product', Product);