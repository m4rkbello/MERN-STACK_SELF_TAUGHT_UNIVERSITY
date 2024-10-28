// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = async(req, res) => {
    res.status(200).json({message: 'Get goals!'})
}

// @desc Set goals
// @route POST /api/goal
// @access Private
const setGoal = async(req, res) => {
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
}

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}


// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}






module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}