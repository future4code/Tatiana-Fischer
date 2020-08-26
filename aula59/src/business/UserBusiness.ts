import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  public async signUp(
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<string> {
    try {
      if (!name || !email || !password || !role) {
        throw new Error("Insira todas as informações para o cadastro");
      }

      if (password.length < 6) {
        throw new Error(" A senha deve conter no mínimo seis caracteres");
      }

      const idGenerator = new IdGenerator(); //colocar na busines
      const id = idGenerator.generateId();

      const hashManager = new HashManager(); //colocar na business
      const hashPassword = await hashManager.hash(password);

      const userDatabase = new UserDatabase(); //colocar na business
      await userDatabase.registerUser(id, name, email, hashPassword, role);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({ id }); //dependência

      return token;
    } catch (e) {
      throw new Error(
        e.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }

  //sem o try catch seria assim:

  public async login(email: string, password: string): Promise<string> {
    try {
      const userDatabase = new UserDatabase(); //dependência
      const user = await userDatabase.getUserByEmail(email);

      const hashManager = new HashManager();
      const isPasswordCorrect = await hashManager.compare(
        password,
        user.password
      );

      if (!isPasswordCorrect) {
        throw new Error("Usuário ou senha errados");
      } //regra de negócio

      const authenticator = new Authenticator(); //dependência
      const token = authenticator.generateToken({
        id: user.id,
      });
      console.log(token);
      return token;
    } catch (e) {
      throw new Error(
        e.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }

  async get(token: string) {
    const userDatabase = new UserDatabase();

    const authenticator = new Authenticator();
    authenticator.getData(token);
    return await userDatabase.get();
  }
}
