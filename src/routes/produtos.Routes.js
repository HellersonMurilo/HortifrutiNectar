const { Router } = require('express')
const produtosRouter = Router()

const ProdutosController = require('../controller/produtosController')
const produtoController = new ProdutosController()

produtosRouter.get('/listar')

produtosRouter.delete('/deletar/:id', produtoController.deletar)

produtosRouter.put('/atualizar/:id', produtoController.atualizar)

produtosRouter.post('/criar', produtoController.criar)

module.exports = produtosRouter