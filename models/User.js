

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim : true
    },
    email: {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password: {
        type : String,
        required : true,
        trim : true
    },
    username : {
        type : String,
        trim : true
    },
    phone : {
        type : String,
        trim : true
    },
    age : {
        type : Number,
        trim : true
    },
    skill : {
        type : String,
        trim : true
    },
    gender : {
        type : String,
        enum : ['Male', 'Female']
    }, 
    location : {
        type : String,
        trim : true
    },
    eccessToken : {
        type : String,
        trim :true
    },
    isAdmin : {
        type :Boolean,
        default :true
    }
},
{
    timestamps : true
});

//Model

export default mongoose.model('User', userSchema);