//cópia do gabarito do exercício aula53

/**
 * EXPRESS
 */

import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Está na hora de começar a criar alguns endpoints.
// O mais simples de todos talvez seja o de pegar o ator
// pelo id.  Queremos criar um método GET que receba como
// path param o id do ator cujas informações queremos pegar.
// Para isso, devemos:
function getActorById(id: string) {}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**
 *
 * KNEX
 */

import knex from "knex";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

// const getActorById = async (id: string): Promise<any> => {
//   await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `);
// };

//queries builders: Agora vamos treinar um pouco os queries builders.
// Eles são uma forma mais simples de fazer requisições que já tratam as
// respostas e as queries usando elementos diretamente do Javascript
// (objetos e arrays). Abaixo, há uma query que cria um ator:
const createActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string,
  type: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: birth_date,
      gender: gender,
    })
    .into("Actor");
};

createActor(
  "002",
  "Tony Ramos",
  4000000,
  new Date("2020-10-05"),
  "male",
  "NotDirector"
);

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);
  return result;
};

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
  // o valor no resultado!
  const count = result[0][0].count;

  return count;
};

const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);
};

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
(async () => {
  console.log(await avgSalary("female"));
})();

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date,
  rating: Number
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      releaseDate: releaseDate,
      playingLimitDate: playingLimitDate,
    })
    .into("Movie");
};

const searchMovie = async (term: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie 
    WHERE title LIKE '%${term}%' OR synposis LIKE '%${term}%'
    ORDER BY releaseDate
  `);

  return result[0];
};

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
