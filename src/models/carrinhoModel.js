const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

const Carrinho = sequelize.define('carrinho', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Carrinho