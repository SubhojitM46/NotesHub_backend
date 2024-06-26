import Contact from "../model/Contact.model.js";

//api for save contact details
export const addContact = async (req,res)=>{
    const {name,email,message}= req.body;
    try{
        const contacterDetails= new Contact({
            name,
            email,
            message
        })
        await contacterDetails.save()
        res.status(200).json(contacterDetails)
    }catch(err){
        res.status(500).json(err)
    }
}

// api for get contact Details 
export const getContact = async(req,res)=>{
    try{
        const contactData= await Contact.find();
        res.status(200).json(contactData)
    }catch(err){
        res.status(500).json(contactData)
    }
}