import mongoose from 'mongoose'
import _ from 'lodash'
import config from '../../../config'

const env = process.env.NODE_ENV
const {
  server, database, username, password,
} = env === 'production' ? config.production.mongoDB : config.development.mongoDB

const clientConnection = new Promise((resolve, reject) => {
  mongoose.set('useCreateIndex', true)
  return mongoose.connect(`mongodb://${username}:${password}@${server}/${database}?authSource=admin`, { useNewUrlParser: true })
    .then(async () => { await resolve('MongoDB connection is established') })
    .catch((err) => {
      const errorInfo = {
        server: 'API INTEGRATION - USER',
        flag: env === 'development' ? 'DEMO' : 'LIVE',
        message: err.message,
      }
      const sendEmailsTo = [
        {
          email: 'anggiyasti@andalin.com',
          fullname: 'Anggiyasti',
        },
        {
          email: 'devi.indra@andalin.com',
          fullname: 'Indra Laksmana',
        },
        {
          email: 'erma.ramadhani@andalin.com',
          fullname: 'Erma Ramadhani',
        },
        {
          email: 'frengky.sofian@andalin.com',
          fullname: 'Frengky Sofian',
        },
      ]
      _.map(sendEmailsTo, (el) => {
        const templateErrorMail = {
          recipient: {
            email: el.email,
            fullName: el.fullname,
          },
          body: {
            errorInfo,
          },
        }
        // errorMail.sendNotifError(templateErrorMail)
      })
      reject(err)
    })
})

module.exports = clientConnection
