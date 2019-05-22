'use strict';

import {Book} from "./book.js";

const readBookButton = document.getElementById('readBookButton');

let myBook;

function init() {
    const bookParameters = {
        name: 'Pol',
        age: '21'
    };

    myBook = new Book(bookParameters);

    readBookButton.addEventListener('click', showDescription);
}

function read() {
    for (let line of myBook) {
        alert(line);
    }
}

function showDescription() {
   read();
}


init();
