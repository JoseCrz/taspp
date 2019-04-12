const mongoose = require('mongoose')

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
        lowercase: true
    },
    age: {
        type: Number,
        default: 0,
        validate (value) {
            if (value < 0) {
                throw new Error ('Age must be positive!')
            }
        }
    }
})

const me = new User({
    name: 'Joseph   ',
    email: 'Joseph@joestar.com',
    age: 0
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
