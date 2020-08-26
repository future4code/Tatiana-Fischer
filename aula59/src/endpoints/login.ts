import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
// import { UserDatabase } from "../data/UserDatabase";
// import { HashManager } from "../services/HashManager";
// import { Authenticator } from "../services/Authenticator";

import { UserBusiness } from "../business/UserBusiness";

export const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userBusiness = new UserBusiness();
    const token = await userBusiness.login(email, password);

    res.status(200).send({
      message: "usuário logado com sucesso",
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

  await BaseDatabase.destroyConnection();
};

// const userDatabase = new UserDatabase();
// const user = await userDatabase.getUserByEmail(email);

// const hashManager = new HashManager();
// const isPasswordCorrect = await hashManager.compare(
//   password,
//   user.password
// );

// if (!isPasswordCorrect) {
//   throw new Error("Usuário ou senha errados");
// }

// const authenticator = new Authenticator();
// const token = authenticator.generateToken({
//   id: user.id,
// });
