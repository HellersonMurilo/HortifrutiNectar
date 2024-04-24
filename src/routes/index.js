const { Router } = require("express")

//import da rotas usuario
const usuarioRoutes = require('../routes/usuarios.routes');
const produtoRoutes = require('../routes/produtos.Routes')

const routes = Router()

//Toda nova rota criada no Routes vai ser lançada aqui
routes.use('/usuarios', usuarioRoutes)

routes.use('/produtos', produtoRoutes)

module.exports = routes

