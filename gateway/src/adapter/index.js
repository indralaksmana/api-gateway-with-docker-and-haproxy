import axios from 'axios'

module.exports = baseURL => axios.create({
  baseURL,
})
