"use strict";
//exercício 1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
const allEvents = [
    {
        name: "Reunião",
        description: "Reunião muito importante",
        startAt: moment_1.default("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment_1.default("25/06/2020 16:00", "DD/MM/YYYY HH:mm"),
    },
    {
        name: "Reuniãozinha",
        description: "Reunião não muito importante",
        startAt: moment_1.default("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment_1.default("26/06/2020 18:00", "DD/MM/YYYY HH:mm"),
    },
    {
        name: "Aniver Tati",
        description: "Aniver muito importante",
        startAt: moment_1.default("11/10/2020 17:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment_1.default("12/10/2020 23:00", "DD/MM/YYYY HH:mm"),
    },
];
//exercício2
moment_1.default.locale("pt-br");
const printAllEvents = (events) => {
    events.forEach((item) => {
        const duration = item.finishAt.diff(item.startAt, "minutes");
        const today = moment_1.default();
        const daysUntilEvent = item.startAt.diff(today, "days");
        console.log(`
			Nome: ${item.name}
			Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
			Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
			Descrição: ${item.description}
		`);
    });
};
