let minhaString = "Olá";
let meuNumero = 12;
let meuNumero2 = "doze";
const person = {
    nome: "Tati",
    idade: 28,
    corFavorita: "rosa",
};
var PERSON;
(function (PERSON) {
    PERSON["NOME"] = "Tati";
    PERSON[PERSON["IDADE"] = 28] = "IDADE";
    PERSON["CORFAVORITA"] = "rosa";
})(PERSON || (PERSON = {}));
const ju = {
    nome: "ju",
    idade: 28,
    corFavorita: "azul",
};
const elis = {
    nome: "Elis",
    idade: 60,
    corFavorita: "vermelha",
};
const tereza = {
    nome: "tereza",
    idade: 35,
    corFavorita: "amarelha",
};
var CORES_ARCO_IRIS;
(function (CORES_ARCO_IRIS) {
    CORES_ARCO_IRIS["VERMELHO"] = "Vermelho";
    CORES_ARCO_IRIS["LARANJA"] = "Laranja";
    CORES_ARCO_IRIS["AMARELO"] = "Amarelo";
    CORES_ARCO_IRIS["VERDE"] = "Verde";
    CORES_ARCO_IRIS["AZUL"] = "Azul";
    CORES_ARCO_IRIS["ANIL"] = "Anil";
    CORES_ARCO_IRIS["VIOLETA"] = "Violeta";
})(CORES_ARCO_IRIS || (CORES_ARCO_IRIS = {}));
const julia = {
    nome: "ju",
    idade: 28,
    corFavorita: CORES_ARCO_IRIS.AZUL,
};
const elisangela = {
    nome: "Elis",
    idade: 60,
    corFavorita: CORES_ARCO_IRIS.VERMELHO,
};
const tatiana = {
    nome: "Tatiana",
    idade: 35,
    corFavorita: CORES_ARCO_IRIS.VIOLETA,
};
//# sourceMappingURL=ex1.js.map