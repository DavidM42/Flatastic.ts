export interface ShoppingListItem   {
    id: number,
    inserterId: number,
    itemName: string,
    details?: string,
    categoryId?: number,
    forAll: 1 | number,
    bought: number,
    priority: 3 | number,
    /** Timestamp */
    date: number,
    buyerId: number
}