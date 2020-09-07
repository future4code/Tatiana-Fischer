import { BandBusiness } from "../business/BandBusiness";
import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { CreateBandInputDTO, GetBandInputDTO, Band } from "../model/Band";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandController {
  public async createBand(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const authenticator = new Authenticator();
      const verifiedToken = authenticator.getData(token);

      const inputNewBand: CreateBandInputDTO = new CreateBandInputDTO(
        req.body.name,
        req.body.musicalGenre,
        req.body.responsible,
        verifiedToken.id
      );

      const bandBusiness = new BandBusiness();
      await bandBusiness.createBand(inputNewBand);

      res.send({ message: "Banda criada com sucesso!" }).status(200);
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  }
}
