import mongoose from "mongoose";

const newsLetterSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        // unique:true
    }
});


const NewsLetter = mongoose.model('SubscibedUser',newsLetterSchema)
export  default NewsLetter