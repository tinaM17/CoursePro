require('dotenv').config()
const express = require('express')
// Load environment variables from .env file
const app = express()
const cors = require('cors')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const Database_url = process.env.DATABASE_URL
const port=process.env.PORT || 3000

//Step1:- use the mongoose library
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())

app.use('/admin', adminRouter)
app.use('/users', userRouter)

//Step4:- Connect with the mongodb database using the connection string
mongoose.connect(
  Database_url ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

app.listen(port, () => {
  console.log('Server is listening on port 3000')
})
