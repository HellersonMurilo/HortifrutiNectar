const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao'); // Importa a instância do Sequelize

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    { timestamps: false }
)

module.exports = Usuario