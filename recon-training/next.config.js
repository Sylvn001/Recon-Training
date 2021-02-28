const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    register: true,
    dest: "public",
    skipWaiting: true,
  }
})

