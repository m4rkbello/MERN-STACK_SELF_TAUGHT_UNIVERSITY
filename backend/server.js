const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalROutes'))


app.listen(port, () => console.log(`SERVER HAS BEEN STARTED ON PORT ${port}`))