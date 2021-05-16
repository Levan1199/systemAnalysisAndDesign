var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Employee = new Schema({
    name:{
        type: String,
        default:''
    },
    position:{
        type: String,
        default:''
    },
    salary:{
        type:String,
        default:''
    },
    dateOfBirth:{
        type:String,
        default:''
    },
    dateJoined:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    phoneNo:{
        type:String,
        default:''
    },
    role:{
        type:String,
        default:''
    },
    section:{
        type:String,
        default:''
    },
    earning:{
        type:Number,
        default:''
    },
    retailer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Retailer'
    }

});


module.exports = mongoose.model('Employee', Employee);