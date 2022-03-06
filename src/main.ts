import { exec } from "child_process";

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

    // const statistics = await flatastic.getCashflowStatistics();
    // statistics.forEach(entry => {
    //     console.log(flatastic.flatmates[entry.id].firstName, ': ', entry.balance);
    // });

    const onlyNonBought = false;

    const nameShoppingList = [];
    const shoppingList = await flatastic.getShoppingList();
    shoppingList.forEach(entry => {
        if (!onlyNonBought || (onlyNonBought && !entry.bought)) {
            nameShoppingList.push(entry.itemName);
        }
    });
    const printableString = nameShoppingList.join('\n');

    console.log(printableString);

    exec(`echo '${printableString}' | lp`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

go();