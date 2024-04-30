const produtoModel = require('../models/produtoModel');
const categoriaModel = require('../models/categoriasModel'); // Importe o modelo da categoria

class ProdutosController {
    async criar(req, res, next) {
        try {
            const { name, amount, price, categoriaId, description } = req.body;

            // Verificação se o usuário preencheu corretamente
            if (!name || !amount || !price || !categoriaId || !description) {
                return res.status(400).json({
                    error: 'Dados preenchidos incorretamente!'
                });
            }

            const verificaCategoria = await categoriaModel.findOne({
                where:{
                    id : categoriaId
                }
            })

            //validando se a categoria existe
            if (!verificaCategoria) {
                return res.status(400).json({
                    msg: "A categoria informada não existe"
                })
            }

            // Cria o produto com os dados fornecidos
            const produto = await produtoModel.create({
                name,
                amount,
                price,
                categoriaId,
                description
            });

            // Retorna o produto criado com sucesso
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(500).json({
                error: 'Erro ao criar produto',
                err: error
            });
        }
    }

    async deletar(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    error: 'Id não informado!'
                });
            }

            const excluirProduto = await produtoModel.destroy({
                where: {
                    id: id
                }
            });

            if (!excluirProduto) {
                return res.status(400).json({
                    error: 'Produto não encontrado'
                });
            }

            return res.status(200).json({
                mensagem: 'Produto excluído com sucesso!'
            });

        } catch (error) {
            return res.status(400).json({
                msg: 'Produto não excluído',
                err: error
            });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    error: 'Id não informado!'
                });
            }

            const { name, amount, price, categoriaId, description } = req.body;

            if (!name || !amount || !price || !categoriaId || !description) {
                return res.status(400).json({
                    error: 'Dados preenchidos incorretamente!'
                });
            }

            const produtoAtualizado = ({
                name: name,
                amount: amount,
                price: price,
                description: description
            });

            const atualizaProduto = await produtoModel.update(produtoAtualizado, {
                where: {
                    id: id
                },
                returning: true
            });

            if (!atualizaProduto) {
                return res.status(400).json({
                    error: 'Produto não encontrado'
                });
            }

            return res.status(200).json({
                mensagem: 'Produto atualizado com sucesso!'
            });

        } catch (error) {
            return res.status(400).json({
                msg: 'Produto não atualizado',
                err: error
            });
        }
    }

    async listar(req, res) {
        try {
            const produtos = await produtoModel.findAll();

            if (!produtos) {
                return res.status(400).json({
                    error: 'Produtos não encontrados'
                });
            }

            return res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }
}

module.exports = ProdutosController;
