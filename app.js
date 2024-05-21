const bodyParser = require('body-parser')
const express = require('express')
const app = express()

require('dotenv').config();
const PORT = 8080 || process.env.PORT;


//importando a routes
const routes = require('./src/routes/index.js')
const sequelize = require('./src/database/conexao.js');
const Produtos = require('./src/models/produtoModel.js');
const Categorias = require('./src/models/categoriasModel.js');
const Usuario = require('./src/models/usuarioModel.js');
const Favoritos = require('./src/models/favoritoModels.js');
const Carrinho = require('./src/models/carrinhoModel.js');


// Middleware para parsear o corpo da requisição como JSON
app.use(bodyParser.json());

app.use(routes)

// validação da conexão com o banco de dados
try {
    sequelize.authenticate()
        .then(() => {
            console.log('Conexão com o banco de dados estabelecida com sucesso.');
        })
        .catch((error) => {
            console.error('Erro ao conectar-se ao banco de dados:', error);
        });
} catch (err) {
    console.error(`Erro de conexão com o banco de dados na main`, err)
}

//criação das relações do banco de dados
Categorias.hasMany(Produtos)
Usuario.hasMany(Favoritos)
Produtos.hasMany(Carrinho)
Usuario.hasOne(Carrinho);  // Ajuste aqui

sequelize.sync({

})

app.listen(PORT, () => {
    console.log(`Para acessar, clique aqui: http://localhost:${PORT}`)
})
