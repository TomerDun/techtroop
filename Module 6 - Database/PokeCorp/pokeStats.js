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

async function findOwners(name) {
    // Find Pokemon Id
    let [res] = await sequelize.query('SELECT id FROM pokemons WHERE name = :name', 
        {replacements: {name}}
    )
    const pokemonId = res[0].id;

    const query = `SELECT name FROM trainers JOIN pokemon_trainers ON pokemon_id = :pokemonId`;
    [res] = await sequelize.query(query, {replacements: {pokemonId}});
    const names = new Set(res.map(r => r.name));
    console.log([...names]);        
}

async function findRoster(name) {
    // get trainer ID
    let [res] = await sequelize.query('SELECT id FROM trainers WHERE name = :name', {replacements: {name}});
    const trainerId = res[0].id;

    const sqlQuery = `SELECT name, pokemons.id AS pokeId FROM pokemons JOIN pokemon_trainers ON trainer_id = :trainerId`;    

    let [newRes] = await sequelize.query(sqlQuery, {replacements: {trainerId}});
    const names = new Set(newRes.map(r => r.name));
    console.log(names);
    
}

// await getHeavy();
// await findByType('grass');
// await findByType('fire');
// await findOwners('bulbasaur');
await findRoster('Ash')