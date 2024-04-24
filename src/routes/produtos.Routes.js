const { Router } = require('express')
const produtosRouter = Router()

const ProdutosController = require('../controller/produtosController')
const produtoController = new ProdutosController()

produtosRouter.get('/listar')

produtosRouter.delete('/deletar/:id', produtoController.deletar)

produtosRouter.put('/atualizar/:id')

produtosRouter.post('/criar', produtoController.criar)

module.exports = produtosRouter