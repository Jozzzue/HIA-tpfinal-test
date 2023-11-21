
const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-complete','root','root',{
    dialect: 'mysql',
    host: 'mysql-tpfinal'
})

module.exports = sequelize;
