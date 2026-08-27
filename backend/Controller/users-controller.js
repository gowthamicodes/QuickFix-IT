

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs")

const Users = require("../Model.schema/users-model")

const getAllUsers = async (_req, res) => {
    try {
        const users = await Users.find()
        return res.status(200).json({ user: users })
    }
    catch (err) {
        return res.status(500).json({ message: "Signup failed" })
    }
}

const getSignup = async (req, res) => {
    // console.log("BODY:", req.body);
    const { name, email, password } = req.body;

    let existingUser
    try {
        existingUser = await Users.findOne({ email: email })
    }
    
    catch (err) {
        return res.status(500).json({ messsage: "Signing up failed , please try again" })

    }
    if (existingUser) {
        return res.status(422).json({ message: "User Existing Already,pls login" });
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12)
    } catch (err) {
        return res.status(500).json({ message: "Could not create user.Please try again" });

    }

    const user = new Users({
        name,
        email,
        password: hashedPassword
    });

    try{
    await user.save();
} catch (err) {
    return res.status(500).json({
        message: "Signup failed"
    });
}
    let token;

    try {
        token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        )
    }catch (err) {
return res.status(500).json({
    message: "Could not create authentication token"
})
    }

    return res.status(201).json({
        message: "Signup successful",
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        },
        token
    });
}

const getLogin = async (req, res) => {

    const { email, password } = req.body;

    let identifiedUser;

    try {
        identifiedUser = await Users.findOne({ email: email });
    } catch (err) {
        return res.status(500).json({
            message: "Login failed, please try again"
        });
    }

    if (!identifiedUser) {
        return res.status(401).json({
            message: "User not found"
        });
    }

    let isValidPassword;

    try {
        isValidPassword = await bcrypt.compare(password, identifiedUser.password)
    } catch (err) {
        return res.status(500).json({
            message: "Could not log you in, please try again"
        })

        // if (identifiedUser.password !== password) {
        //     return res.status(401).json({
        //         message: "Invalid password"
        //     });

    }
    if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid Password" })
    }
    let token;

    try {
        token = jwt.sign(
            {
                userId: identifiedUser._id,
                email: identifiedUser.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        )
    } catch (err) {
        return res.status(500).json({
            message: "Login failed, please try again"
        });
    }

    return res.status(200).json({
        message: "Login successful",
        user: {
            id: identifiedUser._id,
            name: identifiedUser.name,
            email: identifiedUser.email
        },
        token
    });
};


// let isValidPassword;
// try{
//     isValidPassword = await Users.findOne({password: password})
// }
// catch (err) {
// return res.status(401).json({ message: "Could not log you in, please try again"})

// }
// if (!isValidPassword)
// return res.status(401).json({ message: "Invalid password"})

// return res.status(200).json({

// message: "Login Successfully",
// user: {
// name: identifiUser.name,
// email:identifiUser.email

// }
// })















module.exports = { getAllUsers, getSignup, getLogin } 