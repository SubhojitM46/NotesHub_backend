import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required : true,
        uinque: true
    },
    password:{
        type:String,
        required: true
    }
})
 
const User = mongoose.model('User',userSchema);

export default User