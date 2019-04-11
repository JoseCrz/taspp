const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/taspp-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'José',
    age: 23
})

me.save().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})