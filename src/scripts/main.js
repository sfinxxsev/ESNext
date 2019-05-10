'use strict';

import {BookShelf} from "./bookShelf.js";

const readBooksGeneratorButton = document.getElementById('readBooksGeneratorButton');

let bookShelf;

function init() {
    bookShelf = new BookShelf();

    readBooksGeneratorButton.addEventListener('click', readBooksGenerator);
}


function readBooksGenerator() {
    let bookGenerator = bookShelf.read();

    for(let book of bookGenerator) {
        alert(book.readBook());
    }
}


init();
