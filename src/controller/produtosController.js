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

    async deletar(req, res) {
        try {
            //capturar o id que é para ser deletado
            const { id } = req.params;

            //verificar se o id foi informado
            if (!id) {
                return res.status(400).json({
                    error: 'Id não informado!'
                });
            }

            //excluindo o produto com base no id
            const excluirProduto = await produtoModel.destroy({
                where: {
                    id: id
                }
            })
            //verificar se o produto foi excluido
            if (!excluirProduto) {
                return res.status(400).json({
                    error: 'Produto não encontrado'
                })
            }
            
            //SUCESSO
            return res.status(200).json({
                mensagem: 'Produto excluído com sucesso!'
            })

        } catch (error) {
            return res.status(400).json({
                msg: 'Produtos não excluido',
                err: error
            })
        }
    }
}

module.exports = ProdutosController;