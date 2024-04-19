const { Sequelize } = require('sequelize');

// Configuração das credenciais de acesso ao banco de dados
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql' // Ou o tipo de banco de dados que você está usando (por exemplo, 'postgres', 'sqlite', etc.)
});

module.exports = sequelize;