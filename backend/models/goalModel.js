const mongoose = require('mongoose')


//schema
const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
    },
    {
        timestamps: true,
    }   
)

module.export = goalSchema('Goal', goalSchema)