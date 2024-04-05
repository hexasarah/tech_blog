const { Sequelize } = require('sequelize');
const URL = process.env || 3000
const sequelize = new Sequelize(URL);

module.exports = sequelize;