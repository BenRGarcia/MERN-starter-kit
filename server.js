const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const routes = require('./routes')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'build')))
app.use(routes)

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // send error response
  res.status(err.status || 500).send()
})

module.exports = app
