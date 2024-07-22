// MongoDB server is conection that connect nodejs server to MongoDb server..
const mongoose = require('mongoose');


//Define mongoDB url 
const mongoUrl = 'mongodb://localhost:27017/hotels'; //replace hotels with your database name

// Set up mongoDB connection
mongoose.connect(mongoUrl)

// Get the default connection
// Mongoose maintain a default connection object representing the MongoDB connection
const db = mongoose.connection;
db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
})
db.on('connected', () => {console.log('connnected to the MongoDB server');})

db.on('error', (err) => {
    console.log(`Unable to connect to MongoDB server: ${err}`);
})

// Export Database connection
module.exports =db;