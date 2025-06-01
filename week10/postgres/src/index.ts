import { Client } from "pg";
import dotenv from 'dotenv';

dotenv.config();


const client = new Client({
  connectionString: process.env.DATABASEURL,
  ssl: {
    rejectUnauthorized: false
  }
});


async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
}

async function insertUsers(){
  await client.connect();
  const insertUser = await client.query(`
    INSERT INTO users (username,email,password)
    VALUES('anmol7','anmol@gmail.com','1234567890');
  `)
  console.log(insertUser);  
}

insertUsers();
