export class Band {
  constructor(
    private id: string,
    private name: string,
    private musicalGenre: string,
    private responsible: string,
    private userId: string
  ) {}

  getId() {
    return this.id;
  }
  setId(id: string) {
    this.id = id;
  }

  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getMusicalGenre() {
    return this.musicalGenre;
  }
  setMusicalGenre(musicalGenre: string) {
    this.musicalGenre = musicalGenre;
  }

  getResponsible() {
    return this.responsible;
  }

  setResponsible(responsible: string) {
    this.responsible = responsible;
  }

  getUser() {
    return this.userId;
  }
  setUser(user: string) {
    this.userId = user;
  }

  static toBandModel(band: any): Band {
    return new Band(
      band.id,
      band.name,
      band.musicalGenre,
      band.responsible,
      band.userId
    );
  }
}

export class CreateBandInputDTO {
  public name: string;
  public musicalGenre: string;
  public responsible: string;
  public userId: string;

  constructor(
    name: string,
    musicalGenre: string,
    responsible: string,
    userId: string
  ) {
    this.musicalGenre = musicalGenre;
    this.name = name;
    this.responsible = responsible;
    this.userId = userId;
  }
}
export interface GetBandInputDTO {
  musicalGenre: string;
  responsible: string;
  name: string;
}
