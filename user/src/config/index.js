require('dotenv').config()

module.exports = {
  development: {
    client: {
      allowedOrigins: ['http://localhost:4000'],
    },
    perPage: 20,
    jwt: {
      secret: process.env.SECRET,
      session: false,
      expiresIn: '365d',
      issuer: 'ANDALIN',
      audience: 'USRA',
      algorithm: 'HS256',
    },
    sql: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
      define: {
        // prevent sequelize from pluralizing table names
        freezeTableName: true,
        underscored: true,
      },
      dialectOptions: {
        // useUTC: false, // for reading from database
        dateStrings: true,
        typeCast(field, next) { // for reading from database
          if (field.type === 'DATETIME') {
            return field.string()
          }
          return next()
        },
      },
      pool: {
        max: 20, min: 0, idle: 120000, acquire: 90000,
      },
    },
    timezone: 'Asia/Jakarta',
    mailer: {
      method: 'smtp',
      service: 'sendgrid',
      auth: {
        smtp: {
          user: 'azure_57152a4761a7af0a83b150dfe54ed45d@azure.com',
          pass: 'devandalinokbanget2017',
        },
        api: {
          user: 'azure_98d0db3ad1ba4ef948d8ca6566c8c9db@azure.com',
          pass: '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',
        },
      },
      sender: {
        from: 'Andalin<no-reply@Andalin.com>',
        name: 'Andalin - PT EXIMKU TEKNOLOGI INDONESIA',
        address: 'EV Hive - Equity Tower Lt.8, Sudirman Central Business District Lot 9, Jl. Jendral Sudirman Kav 52-53, Jakarta Selatan',
        phone: '021-50986008',
      },
      template: {
        url: 'http://democustomer.andalin.com/',
        path: {
          verify: 'verify-email',
          password: 'password-reset',
          invite: 'invitation',
        },
      },
    },
    redis: {
      host: '127.0.0.1',
      port: '6379',
    },
    mongoDB: {
      server: '3.0.96.57:27017',
      database: 'andalindbdemo',
      username: 'root',
      password: 'thebestandalin2019',
    },
  },

  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },

  production: {
    client: {
      allowedOrigins: ['http://apigateway.andalin.com'],
    },
    perPage: 20,
    jwt: {
      secret: process.env.SECRET,
      session: false,
      expiresIn: '24h',
      issuer: 'ANDALIN',
      audience: 'USRA',
      algorithm: 'HS256',
    },
    sql: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
      define: {
        // prevent sequelize from pluralizing table names
        freezeTableName: true,
        underscored: true,
      },
      dialectOptions: {
        // useUTC: false, // for reading from database
        dateStrings: true,
        typeCast(field, next) { // for reading from database
          if (field.type === 'DATETIME') {
            return field.string()
          }
          return next()
        },
      },
      pool: {
        max: 20, min: 0, idle: 120000, acquire: 90000,
      },
    },
    timezone: 'Asia/Jakarta',
    mailer: {
      method: 'smtp',
      service: 'sendgrid',
      auth: {
        smtp: {
          user: 'azure_57152a4761a7af0a83b150dfe54ed45d@azure.com',
          pass: 'devandalinokbanget2017',
        },
        api: {
          user: 'azure_98d0db3ad1ba4ef948d8ca6566c8c9db@azure.com',
          pass: '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',
        },
      },
      sender: {
        from: 'Andalin<no-reply@Andalin.com>',
        name: 'Andalin - PT EXIMKU TEKNOLOGI INDONESIA',
        address: 'EV Hive - Equity Tower Lt.8, Sudirman Central Business District Lot 9, Jl. Jendral Sudirman Kav 52-53, Jakarta Selatan',
        phone: '021-50986008',
      },
      template: {
        url: 'http://customer.andalin.com/',
        path: {
          verify: 'verify-email',
          password: 'password-reset',
          invite: 'invitation',
        },
      },
    },
    redis: {
      host: '127.0.0.1',
      port: '6379',
    },
    mongoDB: {
      server: 'andalinlivedb-9tgyl.mongodb.net:27017',
      database: 'andalindblive',
      username: 'dev',
      password: 'andalindeveloper2019!',
    },
  },
};
