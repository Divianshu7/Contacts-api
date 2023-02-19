import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth'
import mongoose from 'mongoose'
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
const uri = process.env.MONGO_URL;
mongoose.set('strictQuery', false);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}
app.use('/api', authRoutes)
const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
        if (err) console.error(err);
        else console.log("database connection")
    })
}

connectWithDB()
app.listen(3500, () => {
    console.log('Running on 3500')
})