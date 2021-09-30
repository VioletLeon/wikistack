const Sequlize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/wikistack');

module.exports = {
    db
}