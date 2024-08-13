const { Sequelize } = require('sequelize');
const User = require('../models/User')

const sequelize = new Sequelize('bd_registro', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelicida!!");
}catch(error) {
    console.log("Erro ao conectar com o banco de dados!!", error);
}

User.init(sequelize);

module.exports = sequelize;