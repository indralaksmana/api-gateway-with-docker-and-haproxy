import express from 'express'
import authRoute from './auth.route'

const router = express.Router()

router.use((req, res, next) => {
  console.log('Called: ', req.path)
  next()
})

router.use(authRoute)

module.exports = router
