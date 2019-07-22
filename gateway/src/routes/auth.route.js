import express from 'express'

const router = express.Router()
const apiAdapter = require('../adapter')

const BASE_URL = process.env.USER_BASE_URL
const api = apiAdapter(BASE_URL)

router.post('/auth/login', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.post('/auth/register/customer', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.post('/auth/reset/password/email', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.post('/auth/reset/password', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.post('/auth/resend/email', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.post('/auth/email/emailValidity', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.put('/auth/verify', async (req, res) => {
  await api.put(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.post('/auth/logout', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.put('/auth/invitation', async (req, res) => {
  await api.put(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

router.post('/auth/email-checking', async (req, res) => {
  await api.post(req.path, req.body).then((resp) => {
    res.send(resp.data)
  })
})

export default router
