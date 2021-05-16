var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProdIncludeTrans = new Schema({
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
    transaction:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Transaction'
    }
});


module.exports = mongoose.model('ProdIncludeTrans', ProdIncludeTrans);