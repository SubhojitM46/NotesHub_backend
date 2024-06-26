import { response } from "express";
import Book from "../model/Book.model.js";
// api logic for getBook
export const getBook = async (req, res) => {
    try {
        const options = { timeout: 30000 };
        const book = await Book.find({}, null, options);
        // const result = await Book.find({}, null, options);
        res.status(200).json(book)


    } catch (error) {
        console.log(error);
        res.send(500).json(error)
    }
}
//  api login for addBook
export const addBook = async (req, res) => {
    const { name, price, category, title, image,url } = req.body;
    try {
        // const options = {timeout:30000};
        const addBook = new Book({
            name,
            price,
            category,
            title,
            image,
            url
        })
        await addBook.save();
        res.status(200).json({
            message: "User Created Succefully", book: {
                _id: addBook._id
            }
        })
    } catch (error) {
        console.log(error);
        res.send(500).json(error)
    }
}
// api logic for updateBook
export const updateBook = async (req, res) => {

    try {
        const itemId = req.params.id;
        const updatedData = req.body; // New data from the client

        // Find the item by ID and update it
        const updatedItem = await Book.findByIdAndUpdate(itemId, updatedData, {
            new: true, // Return the updated item
        });
        res.status(200).json(updatedItem);
        
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
// api logic for deleteBook
export const deleteBook = async (req,res)=>{
    try {
        const itemId = req.params.id;
        const deleteBook= await Book.deleteOne({_id:itemId})
        res.status(200).json({deleteBook,message:"Delete Book Successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json({error,message:"Internal Server Error"})
    }
}




// api for get book by id
export const getBookById = async (req, res) => {
    const id = req.params.id;
    if (id == null || id == undefined || id == '') {
        res.status(500).json({ message: "id is null" })
    }
    try {
        const book = await Book.findOne({ _id: id })
        res.status(200).json(book)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}