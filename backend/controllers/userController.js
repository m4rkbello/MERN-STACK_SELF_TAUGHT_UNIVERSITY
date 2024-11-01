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

    res.status(200).json({message:"REGISTER USER!"})
})
// @desc login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message:"LOGIN USER!"})
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