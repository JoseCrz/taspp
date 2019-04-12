const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/taspp-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate (value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email format is invalid!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate (value) {
            if (value.includes('password')) {
                throw new Error('Password must not include "password" string')
            }
        } 
    },
    age: {
        type: Number,
        default: 0,
        validate (value) {
            if (value < 0) {
                throw new Error('Age must be positive!')
            }
        }
    }
})

const me = new User({
    name: 'Jotaro',
    email: 'jotaro@kujo.com',
    age: 23,
    password: 'mimibebe'
})

me.save().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const task = new Task({
//     description: 'Study hard',
//     completed: false
// })

// task.save().then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })
