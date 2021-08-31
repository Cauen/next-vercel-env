const package = require('./package.json')

module.exports = {
  "start": {
    "IS_START": "true",
  },
  "build": {
    "IS_BUILD": "true",
  },
  "local": {
    "NEXT_PUBLIC_BACKEND_URL": "http://127.0.0.1:3100/"
  },
  "dev": {
    "IS_DEV": "true",
  }
}
