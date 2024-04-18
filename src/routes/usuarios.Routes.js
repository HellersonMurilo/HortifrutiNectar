const {Router} = require('express')

const usuarioRoutes = Router()

//importando o controller usuario
const UsuarioController = require('../controller/usuariosController');
const usuarioController = new UsuarioController;

usuarioRoutes.post('/criar', usuarioController.criar)

usuarioRoutes.put('/atualizar/:id', usuarioController.atualizar)

//exportando
module.exports = usuarioRoutes;