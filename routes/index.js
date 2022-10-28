const cancionesRouter = require('./canciones.router')
const categoriesRouter = require ('./categories.router')

function routerApi(app) {
  app.use('/canciones',cancionesRouter)
  app.use('/categories',categoriesRouter)

}
module.exports = routerApi
