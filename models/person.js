const mongoose = require('mongoose');
// Define Person of Schema
const personSchema = new mongoose.Schema({
    name: {
        type:String,
        rquired: true // name is required for mongoose
    },
    age: {
        type:Number,
    },
    work: {
        type:String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type:String,
        reiquired: true
    },
    email : {
        type: String,
        required: true,
        unique: true // email should be unique
    },
    address: {
        type: String
    },
    salary : {
        type: Number,
        required: true
    }
})

// Create Person Model

const Person = mongoose.model('Person', personSchema);
module.exports = Person;