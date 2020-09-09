import { BandBusiness } from "../business/BandBusiness";
import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { CreateBandInputDTO, GetBandByNameInputDTO, Band } from "../model/Band";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandDatabase } from "../data/BandDatabase";
import { receiveMessageOnPort } from "worker_threads";
import { basename } from "path";

export class BandController {
  public async createBand(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!; //ou as string no lugar do !

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

  public async getDetailsBand(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;
      const bandName = req.params.name as string;

      const authenticator = new Authenticator();
      authenticator.getData;

      const bandDatabase = new BandDatabase();
      const band = await bandDatabase.getBandByName(bandName);

      res.status(200).send({
        id: band.setId,
        name: band.setName,
        musicalGenre: band.getMusicalGenre,
        responsible: band.getResponsible,
        userId: band.getUser,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
      await BaseDatabase.destroyConnection();
    }
  }
}
