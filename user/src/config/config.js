require('dotenv').config()

module.exports = {
  development: {
    client: {
      allowedOrigins: ['http://159.65.6.9', 'http://18.136.103.236', 'http://locahost:8080', 'http://localhost:10000', 'http://0.0.0.0:4000'],
    },
    broadcastTo: ['http://159.65.6.9', 'http://13.250.127.82'],
    perPage: 10,
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
      operatorsAliases: false,
      define: {
        // prevent sequelize from pluralizing table names
        freezeTableName: true,
        underscored: true,
      },
      dialectOptions: {
        useUTC: false, // for reading from database
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
      connectionString: 'mongodb://root:thebestandalin2019@3.0.96.57:27017/andalindbdemo?authSource=admin',
    },
    whatsapp: {
      url: 'https://wablas.com/api/send-message',
      apikey: '3dKAstqnhPGatjWcAFA4Ne1CdZOwcjVfslRic6frdWoVeGdZ5stwA3iIsrbO70S5',
    },
    invoice: {
      img_url: 'https://andalin.com/public/assets/img/icon/',
      company: {
        name: 'PT EXIMKU TEKNOLOGI INDONESIA',
        npwp: {
          number: '80.552724.6-015.000',
          address: {
            place: 'Rukan Crown Palace Blok D-15.',
            street: 'JL. Prof Dr Soepomo',
            district: 'NO. 231 Menteng Dalam, Tebet',
            city: 'Jakarta Selatan DKI Jakarta',
          },
        },
        address: {
          place: 'EV Hive - Equity Tower Lt.8',
          building: 'Sudirman Central Business District Lot 9',
          street: 'Jl. Jendral Sudirman Kav 52-53, Jakarta Selatan',
        },
      },
    },
    file: {
      companyStorage: {
        acc: 'demoandalincomp',
        key: 'OdS8j1vDbuScQH1aXrIGWPHGbLhgzpW1D1h2kbk73mWdIEO7zAS02algvC5AIiLJ7UqGaoyqinnPAsCL0IR7Gg==',
        secret: '8jasDdlibfunkefx',
      },
      shipmentStorage: {
        acc: 'demoandalinfileshipment',
        key: 'TE8G6mUbR1x3eqpsHqH8FGjcENquoXFDyRzaHJVHgXanewxXoSMGXUbXHedqPX5mcJ4FTOJPYx2SpOK/N8H01A==',
        secret: '9maStuikuglbbcua',
      },
    },
  },

  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },

  production: {
    client: {
      allowedOrigins: ['http://13.229.250.194', 'http://customer.andalin.com'],
    },
    broadcastTo: ['https://api.andalin.com', 'http://3.0.89.0'],
    perPage: 10,
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
      operatorsAliases: false,
      define: {
        // prevent sequelize from pluralizing table names
        freezeTableName: true,
        underscored: true,
      },
      dialectOptions: {
        useUTC: false, // for reading from database
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
      connectionString: 'mongodb+srv://dev:andalindeveloper2019!@andalinlivedb-9tgyl.mongodb.net/andalindblive?retryWrites=true&w=majority',
    },
    whatsapp: {
      url: 'https://wablas.com/api/send-message',
      apikey: '3dKAstqnhPGatjWcAFA4Ne1CdZOwcjVfslRic6frdWoVeGdZ5stwA3iIsrbO70S5',
    },
    invoice: {
      img_url: 'https://andalin.com/public/assets/img/icon/',
      company: {
        name: 'PT EXIMKU TEKNOLOGI INDONESIA',
        npwp: {
          number: '80.552724.6-015.000',
          address: {
            place: 'Rukan Crown Palace Blok D-15.',
            street: 'JL. Prof Dr Soepomo',
            district: 'NO. 231 Menteng Dalam, Tebet',
            city: 'Jakarta Selatan DKI Jakarta',
          },
        },
        address: {
          place: 'EV Hive - Equity Tower Lt.8',
          building: 'Sudirman Central Business District Lot 9',
          street: 'Jl. Jendral Sudirman Kav 52-53, Jakarta Selatan',
        },
      },
    },
    file: {
      companyStorage: {
        acc: 'demoandalincomp',
        key: 'OdS8j1vDbuScQH1aXrIGWPHGbLhgzpW1D1h2kbk73mWdIEO7zAS02algvC5AIiLJ7UqGaoyqinnPAsCL0IR7Gg==',
        secret: '8jasDdlibfunkefx',
      },
      shipmentStorage: {
        acc: 'demoandalinfileshipment',
        key: 'TE8G6mUbR1x3eqpsHqH8FGjcENquoXFDyRzaHJVHgXanewxXoSMGXUbXHedqPX5mcJ4FTOJPYx2SpOK/N8H01A==',
        secret: '9maStuikuglbbcua',
      },
    },
  },
};
