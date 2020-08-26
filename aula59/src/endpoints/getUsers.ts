import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";

import { UserBusiness } from "../business/UserBusiness";

export const getUsers = async (req: Request, res: Response) => {
  const userBusiness = new UserBusiness();

  try {
    const token = req.headers.authorization!;
    const users = await userBusiness.get(token);

    res.send(users).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(error.status);
  }
  await BaseDatabase.destroyConnection();
};
