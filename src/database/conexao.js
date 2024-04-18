const mysql = require('mysql');

// Crie a conexão com o banco de dados usando as variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


// Tente conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error("Erro na conexão com o banco de dados:", err);
        return;
    }
    console.log("Conexão bem-sucedida com o banco de dados!");
});

// Lidar com erros de conexão
connection.on('error', (err) => {
    console.error("Erro na conexão com o banco de dados:", err);
});

module.exports = connection;
