// src/data/bookData.ts
import { Book } from "../types/Book";

export const bookData: Book[] = [
    {
        BookID: "1",
        Title: "To Kill a Mockingbird",
        Author: "Harper Lee",
        Category: "Classic",
        Quantity: "10",
        Price: "12.50",
        ImgPath: "/images/to_kill_a_mockingbird.jpg",
        Action: "Edit/Delete"
    },
    {
        BookID: "2",
        Title: "1984",
        Author: "George Orwell",
        Category: "Dystopian",
        Quantity: "20",
        Price: "13.00",
        ImgPath: "/images/1984.jpg",
        Action: "Edit/Delete"
    },
    {
        BookID: "3",
        Title: "Pride and Prejudice",
        Author: "Jane Austen",
        Category: "Romance",
        Quantity: "8",
        Price: "10.99",
        ImgPath: "/images/pride_and_prejudice.jpg",
        Action: "Edit/Delete"
    },
    {
        BookID: "4",
        Title: "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        Category: "Classic",
        Quantity: "15",
        Price: "14.00",
        ImgPath: "/images/the_great_gatsby.jpg",
        Action: "Edit/Delete"
    },
    {
        BookID: "5",
        Title: "Moby Dick",
        Author: "Herman Melville",
        Category: "Adventure",
        Quantity: "5",
        Price: "11.75",
        ImgPath: "/images/moby_dick.jpg",
        Action: "Edit/Delete"
    }
];
