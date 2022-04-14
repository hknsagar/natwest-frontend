const axios = require("axios");

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:9001/api'
});

module.exports = instance;