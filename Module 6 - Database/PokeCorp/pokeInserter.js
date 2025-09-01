import { readFileSync } from 'fs';
import { sequelize } from './connection.js';
const pokeJson = readFileSync('pokemons.json');

const data = JSON.parse(pokeJson);

const typeSet = new Set();
const townSet = new Set();
const trainerNamesSet = new Set();
const trainersSet = [];

function generateSets() {    
    const trainersArr = [];

    for (const row of data) {
        typeSet.add(row.type)        
        trainersArr.push(...row.ownedBy)
    }  
    
    // Add Towns and trainers
    for (const trainer of trainersArr) {
        if (!trainerNamesSet.has(trainer.name)) {
            trainerNamesSet.add(trainer.name);
            townSet.add(trainer.town);
            trainersSet.push(trainer);
        }
    }
}

async function insertTowns() {
    for (const town of [...townSet]) {
        await sequelize.query('INSERT INTO towns (name) VALUES (:name)', { replacements: { name: town } })
    }

    console.log('--insert towns finished');
}

async function insertTypes() {
    for (const pokeType of [...typeSet]) {
        await sequelize.query('INSERT INTO pokemon_types (name) VALUES (:name)', { replacements: { name: pokeType } })
    }

    console.log('--insert types finished');
}

async function insertTrainers() {
    for (const trainer of trainersSet) {
        const [results] = await sequelize.query('SELECT id FROM towns WHERE name = :name', {replacements: {name: trainer.town}});
        const townId = results[0].id;        
        
        const query = `INSERT INTO trainers (name, town_id) VALUES (:trainer_name, :townId)`

        await sequelize.query(query, { replacements: { trainer_name: trainer.name, townId: townId } })
    }
    console.log('-- finished adding trainers');
    
}

async function insertPokemons() {
    for (const pokemon of data) {
        // Get Type ID
        const [results] = await sequelize.query('SELECT id FROM pokemon_types WHERE name = :typeName', {replacements: {typeName: pokemon.type}});
        const typeId = results[0].id;

        // Insert pokemon
        const query = `INSERT INTO pokemons (name, height, weight, type_id) VALUES (:name, :height, :weight, :typeId)`
        await sequelize.query(query, {replacements: {
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            typeId: typeId
        }})       
    }
    console.log('--Finished inserting pokemons');    
}

// Insert into join table for pokemons and trainers
async function insertPokemonTrainers() {
    for (const pokemon of data) {
        // get pokemon id
        let trainerId;
        let [results] = await sequelize.query('SELECT id FROM pokemons WHERE name = :name',
            {replacements: {name: pokemon.name}}
        )
        const pokemonId = results[0].id;
        
        for (const trainer of pokemon.ownedBy) {
            // Get Trainer ID
            let [results] = await sequelize.query('SELECT id FROM trainers WHERE name = :name',
                {replacements: {name: trainer.name}}
            );

            trainerId = results[0].id;   
            
            const query  = `INSERT INTO pokemon_trainers (pokemon_id, trainer_id) VALUES (:pokemonId, :trainerId)`
            await sequelize.query(query, {replacements: {pokemonId, trainerId}});
        }
        
    }
}



async function main() {
    generateSets();    
    
    await insertTypes();
    await insertTowns();    
    
    await insertTrainers();
    await insertPokemons();

    await insertPokemonTrainers();


}

main()



