
CREATE TABLE pokemon_types(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) UNIQUE
);

CREATE TABLE towns(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE
);

CREATE TABLE trainers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) UNIQUE,
    town_id INT,
    FOREIGN KEY (town_id) REFERENCES towns (id)
);

CREATE TABLE pokemons(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) UNIQUE,
    type_id INT,
    height INT,
    weight INT,    
    FOREIGN Key (type_id) REFERENCES pokemon_types (id) 
);

CREATE TABLE pokemon_trainers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pokemon_id INT,
    trainer_id INT,
    FOREIGN Key (pokemon_id) REFERENCES pokemons (id),
    FOREIGN Key (trainer_id) REFERENCES trainers (id)
);