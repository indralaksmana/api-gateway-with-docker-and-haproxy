import { Promise } from 'bluebird'

import mongoDB from './mongodb/mongodb-client'
import mySQL from './mysql'

const env = process.env.NODE_ENV
const server = env === 'development' ? '[Demo]' : '[Live]'

const dbClient = new Promise(async (resolve, reject) => {
  await Promise.all([mongoDB, mySQL]).spread(async () => {
    await resolve(`${server} db connection is established`)
  }).catch(err => reject(err))
})

module.exports = dbClient
