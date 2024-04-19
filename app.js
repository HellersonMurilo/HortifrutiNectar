const bodyParser = require('body-parser')
const express = require('express')
const app = express()

require('dotenv').config();
const PORT = 8080


//importando a routes
const routes = require('./src/routes/index.js')
const sequelize = require('./src/database/conexao.js');

// Middleware para parsear o corpo da requisição como JSON
app.use(bodyParser.json());

app.use(routes)

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
sequelize.sync()

app.listen(PORT, () => {
    console.log(`Para acessar, clique aqui: http://localhost:${PORT}`)
})
