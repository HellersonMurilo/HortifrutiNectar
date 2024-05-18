const { Router } = require('express')
const favoritosRoutes = Router()

//import do controller
const FavoritosController = require('../controller/favoritosController')
const favoritosController = new FavoritosController

favoritosRoutes.get('/listarFavoritos', favoritosController.listar)
favoritosRoutes.post('/adicionarFavorito/:id', favoritosController.adicionarFavorito)

module.exports = favoritosRoutes