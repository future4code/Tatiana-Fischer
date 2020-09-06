export class Band {
  constructor(
    private id: string,
    private name: string,
    private musicalGenre: string,
    private responsible: string
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getMusicalGenre() {
    return this.musicalGenre;
  }

  getResponsible() {
    return this.responsible;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setMusicalGenre(musicalGenre: string) {
    this.musicalGenre = musicalGenre;
  }

  setResponsible(responsible: string) {
    this.responsible = responsible;
  }

  static toBandModel(band: any): Band {
    return new Band(band.id, band.name, band.musicalGenre, band.responsible);
  }
}

export interface BandInputDTO {
  musicalGenre: string;
  responsible: string;
  name: string;
}
