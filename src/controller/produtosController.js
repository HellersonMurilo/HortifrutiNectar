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

    async atualizar(req, res) {
        try {
            // capturar o id do produto a ser atualizado
            const { id } = req.params;
            // verificando se o id foi informado
            if (!id) {
                return res.status(400).json({
                    error: 'Id não informado!'
                });
            }

            //capturar o body com os novos dados do produto
            const { name, amount, price, category, description } = req.body;
            //verificação se o usuario preencheu corretamente
            if (!name || !amount || !price || !category || !description) {
                return res.status(400).json({
                    error: 'Dados preenchidos incorretamente!'
                });
            }

            //construção da atualização
            const produtoAtualizado = ({
                name: name,
                amount: amount,
                price: price,
                category: category,
                description: description
            })

            //realização da atualização
            const atualizaProduto = await produtoModel.update(produtoAtualizado, {
                where: {
                    id: id
                },
                returning: true
            })

            //verificar se o produto foi atualizado
            if (!atualizaProduto) {
                return res.status(400).json({
                    error: 'Produto não encontrado'
                })
            }
            //SUCESSO
            return res.status(200).json({
                mensagem: 'Produto atualizado com sucesso!'
            })

        } catch (error) {
            return res.status(400).json({
                msg: 'Produtos não atualizado',
                err: error
            })
        }
    }

    async listar(req, res) {

        try {
            //trazer todos os produtos
            const produtos = await produtoModel.findAll();

            //Verificar se teve retorno
            if (!produtos) {
                return res.status(400).json({
                    error: 'Produtos não encontrados'
                })
            }

            return res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }

    }
}

module.exports = ProdutosController;