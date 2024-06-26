import User from "../model/User.model.js";
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        const user = await User.findOne({ email });
        // console.log(user);
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fname,
            lname,
            email,
            password: hashedPassword
        })
        await createdUser.save()
        res.status(200).json({ message: "User Created Succefully",user:{
                    _id: createdUser._id,
                    fname: createdUser.fname,
                    lname: createdUser.lname,
                    email: createdUser.email,

        } })

    } catch (err) {
        console.log("Error: " + err.message);
        res.status(500).json({ message: "Internal server error" })
    }
}

// login

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        let isMatched = false;
        if (user) {
            isMatched = await bcrypt.compare(password, user.password)

        }

        if (!user || !isMatched) {

            return res.status(400).json({ message: "Invalid username or password" })

        }
        else {
            res.status(200).json({
                message: "Login Successfully", user: {
                    _id: user._id,
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email,


                }
            })

        }
    } catch (err) {
        console.log("Error: " + err.message);
        res.status(500).json({ message: "Internal server error" })
    }
}