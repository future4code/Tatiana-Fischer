"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const newUserName = process.argv[2];
const newUserCpf = process.argv[3];
const newUserBirthday = process.argv[4];
const usersList = [];
function createAccount(newUserName, newUserCpf, newUserBirthday) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cpfNumber = Number(newUserCpf);
            const birthdayNumber = moment_1.default(newUserBirthday, "DD/MM/YYYY");
            usersList.push({
                name: newUserName,
                cpf: cpfNumber,
                birthday: birthdayNumber
            });
            const ;
        }
        finally {
        }
        return user;
    });
}
