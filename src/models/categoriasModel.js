const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

const Categorias = sequelize.define('categorias', {
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
})

module.exports = Categorias;