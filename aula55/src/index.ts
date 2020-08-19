import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { v4 } from "uuid";

dotenv.config();
const userTableName = "User";
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/***ENCONTRAR O ID */
const id = v4();
console.log("Generated Id: ", id);

/*** CRIAR USUÁRIO****/
const createUser = async (id: string, email: string, password: string) => {
  try {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into(userTableName);
    console.log("sucess, new user created!");
  } catch (err) {
    console.log("error, new user didn't create!");
  }
};

createUser("");
