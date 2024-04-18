class UsuariosController {

    async criar(req, res) {
        try {
            const { name, age, password } = req.body;

            if (!name || !age || !password) {
                return res.status(400).json({
                    error: 'Dados preenchidos incorretamente!'
                });
            }

            res.status(200).json({
                nome: name,
                idade: age,
                senha: password
            });
        } catch (error) {
            res.status(500).json({ erro: error.message });
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
}

module.exports = UsuariosController;
