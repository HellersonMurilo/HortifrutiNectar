const { Router } = require("express")

//import da rotas usuario
const usuarioRoutes = require('../routes/usuarios.routes');
const produtoRoutes = require('../routes/produtos.Routes')
const categoriasRoutes = require('../routes/categorias.Routes')
const favoritosRoutes = require('../routes/favoritos.Routes')

const routes = Router()

//Toda nova rota criada no Routes vai ser lançada aqui
routes.use('/usuarios', usuarioRoutes)

routes.use('/produtos', produtoRoutes)

routes.use('/categorias', categoriasRoutes)

routes.use('/favoritos', favoritosRoutes)
module.exports = routes

