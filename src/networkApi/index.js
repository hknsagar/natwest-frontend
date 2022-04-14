const axios = require("axios");
const { STUB_API_BASE_URL } = require("../constants");

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: STUB_API_BASE_URL,
});

module.exports = instance;
