//NPM Modules
const express = require('express')
const chalk = require('chalk')

//Local Modules
require('./db/mongoose')
const User = require('./models/userModel')


const app = express()

//Server Config
const PORT = process.env.PORT || 3000
app.use(express.json())

//Routes
app.post('/users', (request, response) => {
    const user = new User(request.body)

    user.save().then(result => {
        console.log(result)
        response.send(result)
    }).catch(error => {
        response.status(400).send(error)
    })
})

//Server Start
app.listen(PORT, () => {
    console.log(chalk.bgGreen(`Server started on port: ${PORT}`))
})