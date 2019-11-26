CREATE DATABASE IF NOT EXISTS textgame_db;
USE textgame_db;

-- If Table exists remove it
DROP TABLE IF EXISTS characters;

-- Create Table characters
CREATE TABLE characters (
    id INT NOT NULL AUTO_INCREMENT,
    characterName varchar(40) NOT NULL,
    HP INT(255) NOT NULL,
    STR INT(255) NOT NULL,
    DEF INT(255) NOT NULL,
    SPD INT(255) NOT NULL,
    PRIMARY KEY(id)
)