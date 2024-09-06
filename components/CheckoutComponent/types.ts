export type Selection = "transfer" | "card" | "cash";

export type CardInfo = {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    owner: string;
};

export type ContactInfo = {
    email: string;
    phone: string;
};

export type CommercesWithCashPayment =
    | "Oxxo"
    | "7Eleven"
    | "Walmart"
    | "Chedraui"
    | "Farmacias del Ahorro"
    | "Soriana"
    | "Bodega Aurrera"
    | "Circle K"
    | "Kiosko";
