'use strict';

import {bookContent} from "./bookContent.js";

let currentBookText;
let nextIndex = 0;
let textLineArray;
let bookName;
let boookAge;

function resetTextLines() {
    textLineArray = currentBookText.split('\n');
}

function replaceDynamicParameters() {
    currentBookText = currentBookText.replace(/Soapy/g, bookName);
    currentBookText = currentBookText.replace('19', boookAge);
}

export class Book {
    constructor({ name = 'Billy', age = '20' }) {
        currentBookText = bookContent;
        bookName = name;
        boookAge = age;

        replaceDynamicParameters();
        resetTextLines();
    }

    set bookText(value) {
        if(currentBookText !== value) {
            currentBookText = value;

            replaceDynamicParameters();
            resetTextLines();
        }
    }

    get bookText() {
        return currentBookText;
    }

    readBook() {
        return currentBookText;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        if(nextIndex < textLineArray.length ) {
            return {value: textLineArray[nextIndex++], done: false};
        }else {
            nextIndex = 0;
            return {done: true};
        }
    }
}

