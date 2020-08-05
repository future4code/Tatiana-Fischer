export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  //parâmetros que preciso receber no momento de criação do user:
  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }
  //setters, como vai ser feita a lógica:
  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  //método
  public interoduceYourself(): string {
    return `Olá, sou ${this.name}. bom dia!`;
  }
}
