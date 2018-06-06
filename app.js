const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()

// Define routers here
// ex. const apiRouter = require(./routes/data.js)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'build')))

// Mount routes to app here
// ex. app.use(/api/data, apiRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500).send()
})

module.exports = app
