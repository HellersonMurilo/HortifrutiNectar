const favoritosModel = require('../models/favoritoModels')

class FavoritosController {

    //listar favoritos
    async listar(req, res) {
        try {
            const listaFavoritos = await favoritosModel.findAll()

            if (listaFavoritos.length === 0) {
                return res.status(200).json({
                    msg: 'Nenhum item se encontra nos favoritos'
                })
            } else {
                return res.status(200).json(listaFavoritos)
            }

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    //Adicionar nos favoritos
    async adicionarFavorito(req, res) {
        try {
            const { id } = req.params
            //validando se o id foi preenchido corretamente
            if (!id) {
                return res.status(400).json({
                    msg: 'ID não informado!'
                })
            } else {
                try {
                    // Adicionar aos favoritos
                    const novoFavorito = new favoritosModel({
                        id: id
                    });
                    await novoFavorito.save();

                    return res.status(201).json({
                        msg: 'Produto favoritado com sucesso!',
                        produto: novoFavorito
                    })
                } catch (error) {

                }

            }
        } catch (error) {

        }
    }
}

module.exports = FavoritosController