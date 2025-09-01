import { sequelize } from "./connection.js";

// Ex2 - heaviest
async function getHeavy() {
    const [res, metadata] = await sequelize.query('SELECT name, weight FROM pokemons WHERE weight = (SELECT MAX(weight) FROM pokemons)');
    const output = res[0];
    console.log(output);        
}

getHeavy();