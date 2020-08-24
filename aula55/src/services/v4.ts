import { v4 } from "uuid";

/***MÉTODO PÚBLICO PARA GERAR UM ID*****/
export class IdGenerator {
  public generate(): string {
    return v4();
  }
}
