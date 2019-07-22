import '@babel/polyfill'
import cluster from 'cluster'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import path from 'path'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import monitor from 'express-status-monitor'
import router from './src/routes'
import config from './src/config'

const app = express()
const port = process.env.PORT
const server = require('http').Server(app)

const env = process.env.NODE_ENV
const client = env === 'production' ? config.production.client : config.development.client

global.appRoot = path.resolve(__dirname)

if (cluster.isMaster) {
  // eslint-disable-next-line global-require
  const numWorkers = require('os').cpus().length
  console.log(`Master cluster setting up ${numWorkers} workers on port ${port}...`)
  for (let i = 0; i < numWorkers; i += 1) {
    cluster.fork()
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`)
    console.log('Starting a new worker')
    cluster.fork()
  })
} else {
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'))
  app.use(cookieParser())
  app.use(compression())
  app.use(monitor({
    title: 'Andalin API Integration Status',
    port: app.get('port'),
  }))

  app.use((req, resp, next) => {
    const { allowedOrigins } = client
    const { origin } = req.headers
    if (allowedOrigins.indexOf(origin) > -1) {
      resp.setHeader('Access-Control-Allow-Origin', origin)
    }
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    resp.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    resp.setHeader('Access-Control-Allow-Credentials', true)
    next()
  })

  app.use('/api/v1', router)
  app.use(express.static('public'))
  app.disable('x-powered-by')

  server.listen(port, (err) => {
    if (err) { console.log(err) }
  })
}

export default app
