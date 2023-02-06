const path = require('path')

const resolve = arg => {
  return path.resolve(__dirname, '../', arg)
}

module.exports = {
  resolve
}
