const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const mongoConnect = () => {
    
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1")

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    })

    mongoose.connection.on('error', (err) => {
        console.log('Error while connecting to MongoDB:', err);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    })

}

module.exports = mongoConnect;