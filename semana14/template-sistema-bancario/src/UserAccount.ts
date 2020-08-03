export default class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: number[];

  //parametros que preciso receber no momento da criação do usuario: cpf, name, age

  constructor(
    cpf: string,
    name: string,
    age: number,
    balance: number,
    transactions: number[]
  ) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    this.balance = balance;
    this.transactions = transactions;
  }

  public getCpf = () => this.cpf;
  public getName = () => this.name;
  public getAge = () => this.age;
  public getBalance(): number {
    //Aqui deve ser inserida a lógica de pegar saldo do usuário
    return this.balance;
  }

  public addBalance(value: number): void {
    //Aqui deve ser inserida a lógica de adicionar saldo
    this.transactions.push(number);
    console.log("Saldo atualizado com sucesso");
  }
}
