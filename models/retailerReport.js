var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RetailerReport = new Schema({
    time:{
        type:String,
        default:''
    },
    importAmount:{
        type:Number,
        default:''
    },
    stockRemaining:{
        type:Number,
        default:''
    },
    totalEarning:{
        type:Number,
        default:''
    },
});


module.exports = mongoose.model('RetailerReport', RetailerReport);