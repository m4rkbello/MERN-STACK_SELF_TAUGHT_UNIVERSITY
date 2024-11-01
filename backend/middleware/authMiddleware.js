const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const protected = asyncHandler(async(req, res, next) => {
    let Token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
            //Get token from header
            Token = req.headers.authorization.split(' ')[1]

            //Verify token
            const decoded = jwt.verify(Token, process.env.JWT_SECRET)

            //Get user from the Token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized!')
        }
    }

    if(!Token){
        res.status(401)
        throw new Error('Not authorized!')
    }
})

module.exports = {
    protected
}