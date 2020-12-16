// @ts-check

import createError from 'http-errors'
import express, { json, urlencoded } from 'express'
import { join } from 'path'
import logger from 'morgan'

import path from "path"
const __dirname = path.resolve(path.dirname(''));

//import mongoose from 'mongoose'
//const mongoDB = 'mongodb://127.0.0.1/DAW2020';
//mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

//Auth
import { v4 as uuidv4 } from 'uuid'
import session from 'express-session'
import FileStore from 'session-file-store'

import passport from 'passport'
import { Strategy } from 'passport-local'
import axios from 'axios'

passport.use(new Strategy(
  { usernameField: 'id' }, (id, password, done) => {
    axios.get('http://localhost:5000/users/' + id)
      .then((dados) => {
        const user = dados.data

        if (!user) 
          return done(null, false, { message: 'Utilizador inexistente!\n' })
        // @ts-ignore
        if (password != user.password) 
          return done(null, false, { message: 'Credentials invalid' })

        return done(null, user)
      })
      .catch(err => {console.log(err);done(err)})
  })
)

passport.serializeUser((user, done) => {
  console.log('Vou serializar o user na sessão: ' + JSON.stringify(user))
  done(null, user.id)
})

passport.deserializeUser((uid, done) => {
  console.log('Vou desserializar o user: ' + JSON.stringify(uid))
  axios.get('http://localhost:5000/users/'+uid)
    .then(dados=>done(null,dados.data))
    .catch(err=>done(err,false))
})


const app = express()

app.use(
  session({
    genid: (_req) => {
      console.log('Dentro do middleware da sessão')
      return uuidv4()
    },
    store: new (FileStore(session)),
    secret: 'DAW2020auth',
    resave: false,
    saveUninitialized: true
  })
)

app.use((req, _res, next) => {
  console.log(req.sessionID)
  next()
})

app.use(passport.initialize())
app.use(passport.session())

// view engine setup
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(express.static(join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(
  function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })

export default app
