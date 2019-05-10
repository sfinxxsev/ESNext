'use strict';

import {Book} from "./book.js";

const showDescriptionButton = document.getElementById('showDescriptionButton');
const readBookButton = document.getElementById('readBookButton');

let myBook;

function init() {
    const bookParameters = {
        name: 'Pol',
        age: '21'
    };

    myBook = new Book(bookParameters);

    showDescriptionButton.addEventListener('click', showDescription);
    readBookButton.addEventListener('click', readBook);
}

function read() {
    for (let line of myBook) {
        alert(line);
    }
}

function showDescription() {
   read();
}

function readBook() {
    myBook.bookText = 'New book text';
    read();
}



init();
