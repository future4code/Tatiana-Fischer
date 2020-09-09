import { CreateBandInputDTO, GetBandByNameInputDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
  public async createBand(band: CreateBandInputDTO) {
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const bandDatabase = new BandDatabase();

    await bandDatabase.createBand(
      id,
      band.musicalGenre,
      band.name,
      band.responsible,
      band.userId
    );
  }

  public async getBandByName(band: GetBandByNameInputDTO): Promise<Band> {
    const bandDatabase = new BandDatabase();
    return await bandDatabase.getBandByName(band.name);
  }
}
