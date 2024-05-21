const carrinhoModel = require('../models/carrinhoModel')

class CarrinhoController {

    async verCarrinho(req, res) {
        try {
            const itensCarrinhos = await carrinhoModel.findAll()

            if (itensCarrinhos.length === 0) {
                return res.status(200).json({
                    msg: 'Seu carrinho esta vazio'
                })
            }

            return res.status(200).json(itensCarrinhos)
        } catch (error) {

        }
    }

}

module.exports = CarrinhoController