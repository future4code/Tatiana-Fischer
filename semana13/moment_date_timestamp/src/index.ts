//exercício 1

import moment from "moment";
moment.locale("pt-br");

type event = {
  name: string;
  description: string;
  startAt: moment.Moment;
  finishAt: moment.Moment;
};

const allEvents: event[] = [
  {
    name: "Aula Labenu",
    description: "Aula Labenu de desenvolvimento web",
    startAt: moment("09/04/2020 08:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("09/10/2020 17:00", "DD/MM/YYYY HH:mm"),
  },

  {
    name: "Aniver Tati",
    description: "Aniver muito importante",
    startAt: moment("11/10/2020 17:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("12/10/2020 23:00", "DD/MM/YYYY HH:mm"),
  },

  {
    name: "Aniver Tânia",
    description: "Aniver muito importante",
    startAt: moment("28/12/2020 00:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("01/01/2021 00:00", "DD/MM/YYYY HH:mm"),
  },
];

//exercício2 e 3
//a

const showAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {
    const today = moment();
    const duration = item.finishAt.diff(item.startAt, "minutes");
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`
    Nome: ${item.name}
    Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
    Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
    Descrição: ${item.description}
    Duração: ${duration} minutos
    Dias até o evento: ${daysUntilEvent}
    `);
  });
};
showAllEvents(allEvents);
//b)

//exercício 4

const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
): void => {
  if (!name || !description || !startAt || !finishAt) {
    console.log("Verifique se todos os dados forão preenchidos");
    return;
  }

  const diffStartAndToday = startAt.diff(moment(), "seconds");
  const diffFinshAndToday = finishAt.diff(moment(), "seconds");

  if (diffStartAndToday < 0 && diffFinshAndToday < 0) {
    console.log("Insira uma data futura");
    return;
  }

  allEvents.push({ name, description, startAt, finishAt });
};
createEvent(
  process.argv[2],
  process.argv[3],
  moment("29/07/2020", "DD/MM/YYYY"),
  process.argv[5]
);
