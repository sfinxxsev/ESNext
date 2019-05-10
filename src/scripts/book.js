'use strict';

import {bookContent} from "./bookContent.js";

function resetTextLines() {
    this.textLineArray = this.currentBookText.split('\n');
}

function replaceDynamicParameters() {
    this.currentBookText = this.currentBookText.replace(/Soapy/g, this.bookName);
    this.currentBookText = this.currentBookText.replace('19', this.bookAge);
}

export class Book {
    constructor({ name = 'Billy', age = '20' } = {}) {
        this.currentBookText = bookContent;
        this.bookName = name;
        this.bookAge = age;

        replaceDynamicParameters.call(this);
        resetTextLines.call(this);
    }

    readBook() {
        return this.currentBookText;
    }
}

