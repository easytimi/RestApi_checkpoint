const mongoose = require('mongoose');
const{Schema,model} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    }
})

const User = model('User',userSchema);
module.exports = User