const bodyParser = require('body-parser')
const express = require('express')
const app = express()

require('dotenv').config();
const PORT = 3000


//importando a routes
const routes = require('./src/routes/index.js')
const connection = require('./src/database/conexao.js')

// Middleware para parsear o corpo da requisição como JSON
app.use(bodyParser.json());

app.use(routes)

app.listen(PORT, ()=>{
    console.log(`Para acessar, clique aqui: http://localhost:${PORT}`)
})