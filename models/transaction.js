var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Transaction = new Schema({
    type:{
        type: String,
        default:''
    },
    date:{
        type: Date,
        default:''
    },
    employee_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    retailer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Retailer'
    },
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }

});


module.exports = mongoose.model('Transaction', Transaction);