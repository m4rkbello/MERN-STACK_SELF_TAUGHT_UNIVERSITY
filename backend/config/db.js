//IMPORTING THE MONGOOSE
const mongoose = require('mongoose')


//connection
const connectDB = async() => {
    try  {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`LIVE MONGODB CONNECTED: ${conn.connection.host}`.blue.underline);
    }catch  (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB
