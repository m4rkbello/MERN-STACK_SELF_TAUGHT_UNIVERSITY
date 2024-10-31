const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc Set goals
// @route POST /api/goal
// @access Private
const setGoal = asyncHandler(async(req, res) => {
    console.log(req.body)

    if(!req.body.text){
        res.status(404)
        throw new Error('Please add a text field!')
    }
    res.status(200).json({
        message: 'ADD OHAHA!',
        isSuccess: 'true',
        status: 200
        })
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}