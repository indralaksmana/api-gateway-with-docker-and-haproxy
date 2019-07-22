require('dotenv').config()

module.exports = {
  development: {
    client: {
      allowedOrigins: ['http://locahost:8080'],
    }
  },
  production: {
    client: {
      allowedOrigins: ['http://api.hdgroup.com'],
    }
  }
}
