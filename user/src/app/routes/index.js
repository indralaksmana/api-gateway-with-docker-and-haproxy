import express from 'express'
import { HTTP_STATUS, HTTP_MESSAGE } from '../../config/message'
import authenticate from './auth.route'

const router = express.Router() // eslint-disable-line new-cap

router.use('/auth', authenticate)
router.use('/welcome', (req, res) => {
  res.status(200).send('Andalin API Integration - User API')
})

// default redirect link
router.use('*', (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({ message: HTTP_MESSAGE.NOT_FOUND })
})

export default router
