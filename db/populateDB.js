#! /usr/bin/env node

const dotenv = require("dotenv");
dotenv.config();
console.log("DATABASE_URL:", process.env.DATABASE_URL);
const { Client } = require("pg");
const SQL = `
CREATE TABLE aircrafts(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255),
img TEXT
);

CREATE TABLE devices(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255),
img TEXT
);

CREATE TABLE movies(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255),
img TEXT
);
INSERT INTO aircrafts (name,img) VALUES ('X-Wing Starfighter','https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864'),('Tie Fighter','https://lumiere-a.akamaihd.net/v1/images/TIE-Fighter_25397c64.jpeg?region=0%2C1%2C2048%2C1152'),('A-Wing','https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png?region=0%2C71%2C812%2C457'),('Arc-170','https://lumiere-a.akamaihd.net/v1/images/databank_arc170starfighter_01_169_f932abcb.jpeg?region=0%2C0%2C1560%2C878'),('Star Destroyer','https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900');
INSERT INTO devices (name,img) VALUES ('N-69 Starpath Unit','https://lumiere-a.akamaihd.net/v1/images/imperial-ns9-starpath-unit-main_3be2860b.jpeg?region=245%2C0%2C1429%2C804'),('Holocron Machine','https://lumiere-a.akamaihd.net/v1/images/Holocron_6d6b7de1.jpeg?region=0%2C0%2C1920%2C1080'),('Lightsaber','https://lumiere-a.akamaihd.net/v1/images/yoda-s-lightsaber-main_9ebf17d9.jpeg?region=164%2C0%2C953%2C536');
INSERT INTO movies(name,img) VALUES ('A new hope','https://lumiere-a.akamaihd.net/v1/images/EP4_POS_2_D-RESIZED_f977074a.jpeg'),('The Empire Strikes Back','https://lumiere-a.akamaihd.net/v1/images/image_ca7910bd.jpeg'),('Return of the Jedi','https://lumiere-a.akamaihd.net/v1/images/EP6_POS_21_R-RESIZED_2873dc04.jpeg'),('The Phantom Menace','https://lumiere-a.akamaihd.net/v1/images/EP1-IA-99993-RESIZED_f9ae99b6.jpeg'),('Attack Of The Clones','https://lumiere-a.akamaihd.net/v1/images/EP2-IA-69221-RESIZED_1e8e0971.jpeg'),('Revenge of the Sith','https://lumiere-a.akamaihd.net/v1/images/image_ff356cdb.jpeg')
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}
main();
