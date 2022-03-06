// thx https://gist.github.com/nahakiole/99564947a51ec1a1f82198fb4afef0ac

import fetch from 'node-fetch';
import { CashflowEntry } from '../types/CashflowEntry.js';


import { CashFlowStatistic } from '../types/CashflowStatistic.js';
import { Flatmate, Information } from '../types/Information.js';
import { ShoppingListItem } from '../types/ShoppingListItem.js';
import { Task } from '../types/Task.js';

export class Flatastic {

    private bootFlatmates: { [key: number]: Flatmate} = {};

    // TODO write login method to retrive api_key once from username/password and then cache api key for next use
    // if api key does not work login again via username/password
    constructor(private apikey: string) {}

    public async initialize() {
        const information = await this.getInformation();
        for (let i = 0; i < information.flatmates.length; i++) {
            const flatmate = information.flatmates[i];
            this.bootFlatmates[flatmate.id] = flatmate;
        }
    }

    public get flatmates() {
        return this.bootFlatmates;
    }

    private async request(url, option) {
        const options = {
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "de-CH,de;q=0.9,en-US;q=0.8,en-CH;q=0.7,en;q=0.6,ar-JO;q=0.5,ar;q=0.4,de-DE;q=0.3",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "x-api-key": this.apikey,
                "x-api-version": "2.0.0",
                "x-client-version": "2.3.20"
            }
        };

        const response = await fetch(url, options);
        const json = await response.json();
        return json
    }

    // TODO create a message to find out type
    public async getPinMessages() {
        return this.request('https://api.flatastic-app.com/index.php/api/shouts?limit=15&type=shout', {});
    }

    public async getShoppingList() {
        return this.request('https://api.flatastic-app.com/index.php/api/shoppinglist', {}) as Promise<ShoppingListItem[]>;
    }

    public async getTaskList(){
        return this.request('https://api.flatastic-app.com/index.php/api/chores', {}) as Promise<Task[]>;
    }

    public async getInformation() {
        return this.request('https://api.flatastic-app.com/index.php/api/wg', {}) as Promise<Information>;
    }

    public async getCashflowEntries() {
        return this.request('https://api.flatastic-app.com/index.php/api/cashflow?limit=10&offset=0', {}) as Promise<CashflowEntry[]>;
    }

    public async getCashflowStatistics() {
        return this.request('https://api.flatastic-app.com/index.php/api/cashflow/statistics', {}) as Promise<CashFlowStatistic[]>;
    }
}