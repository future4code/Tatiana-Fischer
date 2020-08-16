import express, { Request, Response } from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/***********DOTENV****************/
dotenv.config();

/***********KNEX/CONECTION****************/
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

/*******************USER TABLE**************/
/****CREATE NEW USERS TABLE***/
/****raw*****/
async function create_users_table(): Promise<void> {
  try {
    await connection.raw(`
            CREATE TABLE Users
            (
                user_id INT PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                nickname VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL
            )
        `);

    console.log("sucess!");
  } catch (err) {
    console.log(err);
  }
}
// create_users_table();

/***********************NEW USER**************************/
/*****RAW****/
async function create_new_user(
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  try {
    await connection.raw(`
              INSERT INTO Users VALUES
              (
                  "${id}",
                  "${name}",
                  "${nickname}",
                  "${email}"

              )
          `);

    console.log("sucess, new user created!");
  } catch (err) {
    console.log(err);
  }
}
// create_new_user("001", "Tatiana", "Tati", "tati@gmail.com");

/*****teste com QUERY BUILD*****/
// async function create_new_user2(
//   user_id: string,
//   name: string,
//   nickname: string,
//   email: string
// ): Promise<void> {
//   try {
//     await connection.insert({ user_id, name, nickname, email }).into("Users");

//     console.log("sucess, new user created 2!");
//   } catch (err) {
//     console.log(err);
//   }
// }

// // create_new_user2("002", "Luiza", "Lu", "lui@gmail.com");

/*****************SELECT TABLE - GET ALL USERS***********************/
/***RAW******/
async function get_all_users(): Promise<any> {
  try {
    const result = await connection.raw(`SELECT * FROM Users`);

    console.log("get_all_users:", result[0]);
    return result[0];
  } catch (err) {
    console.log(err);
  }
}

// get_all_users();

/****QUERY BUILDER*****/

// async function get_all_users2(): Promise<void> {
// try {
//     const result = await connection.select("*").from("Users");

//     console.log("get_all_users2:", result);
// } catch (err) {
//     console.log(err);
// }
// }

// get_all_users2();

/******************EXPRESS***********************/
const app = express();

app.use(
  express.json()
); /*middleware que converte o body de JSON para um objeto*/

/*******GET ALL USER********** */

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await get_all_users();

    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

/**************GET USER ID******** */

async function get_user_by_id(id: string): Promise<any> {
  try {
    const result = await connection.raw(
      ` SELECT * FROM Users WHERE id = '${id}'`
    );

    console.log("get_user_id:", result[0]);
    return result[0];
  } catch (err) {
    console.log(err);
  }
}

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await get_user_by_id(id);

    res.status(200).send(user);
    console.log("usuário selecionado:", user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
    console.log("erro ao pegar o usuário pelo id");
  }
});

/*********************TASKS TABLE******************* */

/************* ABRINDO O BACK PARA O MUNDO PELA PORTA 3000**********/
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
