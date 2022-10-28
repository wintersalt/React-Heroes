const heroesRouter = require('./routes/hero')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb://localhost:27017/superheroesdb', () => {
  console.log('DB is working...')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

app.use('/api', heroesRouter)

app.listen(3001, () => {
  console.log('Server is running...')
})
