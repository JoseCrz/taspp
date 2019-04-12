const express = require('express')
const chalk = require('chalk')

const PORT = process.env.PORT || 3000

const app = express()

app.post('/users', (request, response) => {
    response.send('Testing!')
})

app.listen(PORT, () => {
    console.log(chalk.bgGreen(`Server started on port: ${PORT}`))
})