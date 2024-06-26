import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import subscribeRoute from './route/subscriber.route.js'
import contactRoute from './route/contact.route.js'
import mongoose from "mongoose"
//import db from './_dbConn.js'




const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const port = 4001
// const MongoDbURI = process.env.MongoDbURI
const URI = 'mongodb+srv://admin:admin123@mycluster.y1bpkya.mongodb.net/books_project?retryWrites=true&w=majority&appName=mycluster';
// const MongoDbURI = 'mongodb://127.0.0.1:27017/bookStore';
// db conneton


  //db(MongoDbURI);

  try {
        
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database Connected Succesfully');
} catch(error) {
    console.log('Error: ', error.message);
}

// defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use("/subscribe",subscribeRoute)
app.use("/contact",contactRoute)
// app.use("book",bookRoute)

// console.log(process.env.PORT);

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})