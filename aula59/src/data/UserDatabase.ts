import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_Arq";

  public async registerUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        name,
        email,
        password,
        role,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
    return result[0];
  }

  public async get(): Promise<any[]> {
    try {
      const users: any = [];

      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME);

      for (let user of result) {
        users.push(user);
      }

      return users;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
