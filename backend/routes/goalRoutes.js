const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')
const {protected} = require('../middleware/authMiddleware')

//view goals and set goal - chaining
router.route('/').get(protected, getGoals).post(protected, setGoal)
router.route('/:id').delete(protected, deleteGoal).put(protected, updateGoal)


module.exports = router