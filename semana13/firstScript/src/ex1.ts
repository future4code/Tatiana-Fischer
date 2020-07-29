// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript,
// então vamos conhecer um pouco desses critérios.
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela.
// Tente atribuir um número a esta variável. O que acontece?
//O vs code não permite, avisa que só pode receber uma string

let minhaString: string = "Olá";

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como podemos fazer para que essa variável também aceite strings?

let meuNumero: number = 12;
let meuNumero2: number | string = "doze";

// c) Agora crie um novo objeto. Este objeto é uma pessoa,
// e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

const person: { nome: string; idade: number; corFavorita: string } = {
  nome: "Tati",
  idade: 28,
  corFavorita: "rosa",
};

// Como você faria para garantir que o objeto só tenha
// as propriedades descritas acima? Faça a tipagem do objeto
// para que ele só aceite os valores acima.

enum PERSON {
  NOME = "Tati",
  IDADE = 28,
  CORFAVORITA = "rosa",
}
// d) Crie mais três objetos, que também precisam ter apenas os campos
// definidos acima. Crie um tipo Pessoa para garantir que todos os objetos
// tenham os mesmos campos

type person = {
  nome: string;
  idade: number;
  corFavorita: string;
};

const ju: person = {
  nome: "ju",
  idade: 28,
  corFavorita: "azul",
};
const elis: person = {
  nome: "Elis",
  idade: 60,
  corFavorita: "vermelha",
};
const tereza: person = {
  nome: "tereza",
  idade: 35,
  corFavorita: "amarelha",
};

// e) Modifique o tipo de objeto para que possamos apenas escolher entre
// as cores do arco-íris. Utilize um enum para isso.

enum CORES_ARCO_IRIS {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

const julia: person = {
  nome: "ju",
  idade: 28,
  corFavorita: CORES_ARCO_IRIS.AZUL,
};
const elisangela: person = {
  nome: "Elis",
  idade: 60,
  corFavorita: CORES_ARCO_IRIS.VERMELHO,
};
const tatiana: person = {
  nome: "Tatiana",
  idade: 35,
  corFavorita: CORES_ARCO_IRIS.VIOLETA,
};
