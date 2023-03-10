const mongoose = require('mongoose')

//schema user

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'name is required'],
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique: true,
    },
    password: {
        type:String,
        required:[true, "password is required"],
    },
}, {timestamps:true}
);

//export

const userModel = mongoose.model('users', userSchema)
module.exports = userModel