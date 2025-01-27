// src/types/Book.ts
export interface Book {
    id: string;
    title: string;
    author: string;
    category: [string];
    language:string;
    publisher:string;
    quantity: string;
    price: string;
    imgData?: string;
    description: string;
    action: boolean;
}
