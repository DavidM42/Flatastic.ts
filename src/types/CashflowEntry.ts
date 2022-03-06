interface Item {
    id: number,
    name: string,
    price: number,
    sum: number,
    buyer: number,
    sharers: number[],
    quantity: number
}

export interface CashflowEntry   {
    id: number,
    name: string,
    /** Timestamp */
    date: number,
    creatorId: number,
    totalSum: number,
    sum: number,
    /** Timestamp */
    insertDate: number,
    /** List of user ids */
    involvedUsers: number[],
    items: Item[],
    /** TODO unknown types */
    attachments: []
}