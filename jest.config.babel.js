const path = require('path');
module.exports = {
  transform: {
    '^.+\\.[js|jsx|ts|tsx]?$': path.resolve(__dirname, './jest.config.babel.js'),
  },
  testRegex: '/__tests__/*'
};