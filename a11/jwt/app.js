import createError from 'http-errors'
import express, { json, urlencoded } from 'express'
import logger from 'morgan'
import jwt from 'jsonwebtoken'

import indexRouter from './routes/index.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use((req, res, next) => {
  jwt.verify(req.query.token, "DAW2020", (e, payload) => {
    if (e)
      res.status(401).jsonp({ error: e })
    else {
      req.user = {
        user: payload.username,
        level: payload.level
      }
      next()
    }
  })
})

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  console.log(Object.message)
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500).jsonp({ error: err.message })
})

export default app
