const express = require('express')
const chalk = require('chalk')

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(chalk.bgGreen(`Server started on port: ${PORT}`))
})