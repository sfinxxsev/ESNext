'use strict';

import {Book} from "./book.js";

const showDescriptionButton = document.getElementById('showDescriptionButton');
const readBookButton = document.getElementById('readBookButton');

let myBook;

function init() {
    const bookParameters = {
        name: 'Soapy’s Choice',
        year: '1995'
    };

    myBook = new Book(bookParameters);

    showDescriptionButton.addEventListener('click', showDescription);
    readBookButton.addEventListener('click', readBook);
}

function showDescription() {
    //alert(myBook.shortBookDescription);
    for (let line of myBook) {
        alert(line);
    }
}

function readBook() {
    alert(myBook.readBook());
}



init();
