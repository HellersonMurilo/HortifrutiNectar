const { Router } =  require('express')
const carrinhoRouter = Router()

//importando o Controller
const CarrinhoController = require('../controller/carrinhoController')

//instanciando a classe controller
const carrinhoController = new CarrinhoController

//visualizar
carrinhoRouter.get('/verCarrinho', carrinhoController.verCarrinho)

//adicionar
carrinhoRouter.post('/adicionarProduto/:id', (req, res)=>{
    console.log('adicionado')
})


//deletar
carrinhoRouter.delete('/deletarCarrinho', (req, res)=>{
    console.log('apagou td seu fdp')
})

carrinhoRouter.delete('/deletarProduto/:id', (req, res)=>{
    console.log('produto saiu fora')
})

//atualizar
carrinhoRouter.put('/atualizarCarrinho/:id', (req, res)=>{
    console.log('atualizado')
})

module.exports = carrinhoRouter