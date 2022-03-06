import { API_KEY } from "./credentials.js";
import { Flatastic } from "./lib/Flatastic.js";

async function go() {
    const flatastic = new Flatastic(API_KEY);
    await flatastic.initialize();
    // console.log(await flatastic.getShoppingList());
    // console.log(await flatastic.getTaskList());
    // console.log(await flatastic.getInformation());
    // console.log(await flatastic.getCashflowStatistics());
    // console.log(await flatastic.getCashflowEntries());
    // console.log(await flatastic.getPinMessages());

    const statistics = await flatastic.getCashflowStatistics();
    statistics.forEach(entry => {
        console.log(flatastic.flatmates[entry.id].firstName, ': ', entry.balance);
    });
}

go();