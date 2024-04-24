const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

const Produtos = sequelize.define('produtos', {
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
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    category:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Produtos;