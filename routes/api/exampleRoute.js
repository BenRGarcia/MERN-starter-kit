const express = require('express')
const router = express.Router()
const db = require('../models')
const user = db.User

/**
 * Example route
 */

 router.route('*', (req, res, next) => {
   res.json({ status: "backend api server is up and running" })
 })