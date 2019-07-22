import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../../../config'

const basename = path.basename(__filename)
const env = process.env.NODE_ENV
const {
  sql: {
    database, username, password, host, dialect, define, dialectOptions,
    pool: { max, min, idle },
  },
} = env === 'production' ? config.production : config.development

const db = {}

const sequelize = new Sequelize(
  database, username, password, {
    host,
    dialect /** dialect mysql || postgres || mssql */,
    define,
    dialectOptions,
    pool: { max, min, idle },
  },
)

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize

module.exports = db
