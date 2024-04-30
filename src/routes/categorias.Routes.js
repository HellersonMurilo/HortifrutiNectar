const { Router } = require('express')
categoriasRouter = Router()

const CategoriaController = require('../controller/categoriasController')
const categoriaController = new CategoriaController

categoriasRouter.post('/criar', categoriaController.criar)

categoriasRouter.put('/atualizar/:id', (req, res) => {

})

categoriasRouter.delete('/deletar/:id', (req, res) => {

})

module.exports = categoriasRouter