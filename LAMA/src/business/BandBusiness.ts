// import { BandInputDTO } from "../model/Band";

// import { BandDatabase } from "../data/BandDatabase";
// import { IdGenerator } from "../services/IdGenerator";
// import { HashManager } from "../services/HashManager";
// import { Authenticator } from "../services/Authenticator";

// export class BandBusiness {
//   async createBand(band: BandInputDTO) {
//     const idGenerator = new IdGenerator();
//     const id = idGenerator.generate();

//     // const hashManager = new HashManager();
//     // const hashPassword = await hashManager.hash(band.);

//     const bandDatabase = new BandDatabase();
//     await bandDatabase.createBand(
//       id,
//      band.musicalGenre,
//      band.name,
//      band.responsible
//     );

//     const authenticator = new Authenticator();

//     return ;
//   }

//   async getUserByName(band: BandInputDTO) {
//     const bandDatabase = new BandDatabase();
//     const bandFromDB = await bandDatabase.getBandByName(band.name);

//     });

// }
