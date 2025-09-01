import Sequelize from 'sequelize';

const sequelize = new Sequelize('mysql://root:0550@localhost/PokeCorp');

sequelize.authenticate().then(() => console.log('Connection established'));
