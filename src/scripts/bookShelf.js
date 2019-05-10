'use strict';

import {Book} from "./book.js";

let book_1;
let book_2;
let book_3;

function* readGenerator() {
    yield book_1;
    yield book_2;
    yield book_3;
}

export class BookShelf {
    constructor() {
        book_1 = new Book({name: 'Oliver', age: '20'} );
        book_2 = new Book({name: 'Patrick', age: '21'} );
        book_3 = new Book({});
    }

    read() {
        return readGenerator();
    }
}
