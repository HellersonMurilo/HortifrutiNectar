const categoriasModel = require('../models/categoriasModel')

class CategoriasController {
    async criar(req, res) {
        try {
            const { name } = req.body

            //verificação se o nome foi informado
            if (!name) {
                return res.status(400).json({
                    msg: "Dados para criação de Categoria informados incorretamente"
                })
            }

            //salvando a categoria
            const categoria = new categoriasModel({
                name
            })
            await categoria.save()
            return res.status(201).json({
                msg: `Categoria '${name}' salva com sucesso`
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Erro no servidor",
                err: error
            })
        }
    }
}   

module.exports = CategoriasController