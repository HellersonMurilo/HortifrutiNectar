const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

const Favoritos = sequelize.define('favoritos', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = Favoritos