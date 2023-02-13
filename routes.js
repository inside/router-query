const routes = require('next-routes')

module.exports = routes()
  .add(
    'a', // route name
    '/a/:slug', // route pattern
    'a' // page
  )
  .add('b', '/b/:slug', 'b')
