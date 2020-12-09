import createError from 'http-errors'
import express, { json, urlencoded } from 'express'
import logger from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index.js'

import mongoose from 'mongoose'

const mongoDB = 'mongodb://127.0.0.1/DAW2020';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
const db = mongoose.connection

db.on('error', ()=>{
  console.log("Error connecting to MongoDB")
})
db.once('open', ()=>{
  console.log("Connected to MongoDB")
})

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500).jsonp(err)
})

export default app
