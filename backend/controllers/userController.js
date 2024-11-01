const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields!')
    }

    //check if user existed or wala
    const userExists = await User.findOne({email})

    if(userExists)  {
        res.status(400)
        throw new Error('User has already exists!')
    }

    //hash-password gamit BYCRIPTJS 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user)   {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data!')
    }

})
// @desc login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body 

    //check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else{
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

// @desc get user data
// @route get /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({message:"USER AUTHENTICATED"})
})


module.exports = {
    registerUser,
    loginUser,
    getMe,
}