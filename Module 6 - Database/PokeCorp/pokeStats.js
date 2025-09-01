import { sequelize } from "./connection.js";

// Ex2 - heaviest
async function getHeavy() {
    const [res, metadata] = await sequelize.query('SELECT name, weight FROM pokemons WHERE weight = (SELECT MAX(weight) FROM pokemons)');
    const output = res[0];
    console.log(output);        
}

async function findByType(typeName) {
    let [res] = await sequelize.query('SELECT id FROM pokemon_types WHERE name = :typeName', {replacements: {typeName: typeName}});
    const typeId = res[0].id;

    const query = `SELECT name FROM pokemons WHERE type_id = :typeId`;
    [res] = await sequelize.query(query, {replacements: {typeId}});
    console.log(res);
    
}

// await getHeavy();
await findByType('grass');
await findByType('fire');