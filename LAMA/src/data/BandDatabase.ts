import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_LAMA";

  public async createBand(
    id: string,
    musicalGenre: string,
    name: string,
    responsible: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          musicalGenre,
          name,
          responsible,
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandByName(name: string): Promise<Band> {
    const result = await this.getConnection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ name });

    return Band.toBandModel(result[0]);
  }
}
