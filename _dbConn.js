// database connection
import mongoose from "mongoose"


const db= (MongoDbURI )=>{
    try {
    mongoose.connect(MongoDbURI)
    console.log("db connected ")
} catch (error) {
    console.log("internal error")
    console.log(error);
}
}

export default db;

