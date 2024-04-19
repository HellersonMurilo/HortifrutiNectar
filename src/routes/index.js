const { Router } = require("express")

//import da rotas usuario
const usuarioRoutes = require('../routes/usuarios.routes');

const routes = Router()

//Toda nova rota criada no Routes vai ser lançada aqui
routes.use('/usuarios', usuarioRoutes)

module.exports = routes

