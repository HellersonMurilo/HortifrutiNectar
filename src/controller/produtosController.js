const produtoModel = require('../models/produtoModel')

class ProdutosController {
    async criar(req, res, next) {
        try {
            const { name, amount, price, category, description } = req.body;

            //verificação se o usuario preencheu corretamente
            if (!name || !amount || !price || !category || !description) {
                return res.status(400).json({
                    error: 'Dados preenchidos incorretamente!'
                });
            }
            const produto = new produtoModel({
                name,
                amount,
                price,
                category,
                description
            });
            await produto.save();
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(400).json({
                error: 'Erro ao criar produto',
                err: error
            });
        }
    }
}

module.exports = ProdutosController;