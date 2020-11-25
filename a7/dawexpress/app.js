import createError from 'http-errors'
import express, { json, urlencoded } from 'express'
import { join } from 'path'
import logger from 'morgan'

import path from "path"
const __dirname = path.resolve(path.dirname('')); 

import indexRouter from './routes/index.js'

import mongoose from 'mongoose'

const mongoDB = 'mongodb://127.0.0.1/DAW2020';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})


const app = express()

// view engine setup
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(express.static(join(__dirname, 'public')))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
