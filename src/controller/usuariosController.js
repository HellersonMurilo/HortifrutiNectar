const usuarioModel = require('../models/usuarioModel')

class UsuariosController {

    async criar(req, res) {
        try {

            const { name, email, password } = req.body;

            //verificação se o usuario preencheu corretamente
            if (!name || !email || !password) {
                return res.status(400).json({
                    error: 'Dados preenchidos incorretamente!'
                });
            }

            //salvar no bano de dados e verificação
            const novoUsuario = await usuarioModel.create(req.body)

            //validação
            if (!novoUsuario) {
                res.status(400).json({
                    msg: "usuario nao criado no banco de dados"
                })
            }

            res.status(200).json({
                msg: "Usuario cadastrado com sucesso!",
                usuario: novoUsuario
            });
        } catch (error) {
            // Lidar com erros internos do servidor
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ erro: 'Erro interno do servidor.' });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { name, age, password } = req.body;

            if (!id) {
                return res.status(400).json({
                    erro: "Id não informado"
                });
            }

            if (!name || !age || !password) {
                return res.status(400).json({
                    error: 'Dados preenchidos incorretamente!'
                });
            }

            // Lógica de atualização no banco de dados
            // ...

            // Supondo que a atualização ocorreu com sucesso
            res.status(200).json({
                msg: "Dados atualizados com sucesso!"
            });
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }

    async deletar(req, res) {
        try {

            // Pegando o id do parâmetro da requisição
            const { id } = req.params;

            console.log(id)

            // Verificando se o id foi informado
            if (!id) {
                res.status(400).json({
                    mensagem: "ID não informado."
                });
            }

            // Excluindo o usuário com base no id
            const numLinhasExcluidas = await usuarioModel.destroy({
                where: {
                    id: id
                }
            });

            // Usuário excluído com sucesso
            res.status(200).json({
                mensagem: "Usuário excluído com sucesso."
            });
        } catch (error) {
            // Lidando com erros
            console.error("Erro na exclusão do usuário:", error);
            res.status(500).json({
                mensagem: "Erro na exclusão do usuário.",
                erro: error
            });
        }
    }
}

module.exports = UsuariosController;
