export enum CustomerType { // BY DEFAULT AKAN BERTIPE DATA NUMBER
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}