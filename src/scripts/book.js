'use strict';

import {bookText} from "./bookText.js";

let currentBookText;

export class Book {
    constructor({ name = 'Sample book name', age = 'some age' }) {
        currentBookText = bookText;
        currentBookText.replace('Soapy', '${name}');
    }

    set bookText(value) {
        currentBookText = value;
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
        let iterator = 0;
        const textLineArray = currentBookText.split('\n');
        const linesCount = textLineArray.length;
        if (this.currentItem === undefined) {
            // инициализация состояния итерации
            this.currentItem = textLineArray[iterator];
        }

        if (iterator <= linesCount) {
            this.currentItem = textLineArray[iterator];
            iterator++;
            return {
                done: false,
                value: this.currentItem
            };
        } else {
            // очистка текущей итерации
            delete this.currentItem;
            return {
                done: true
            };
        }
    }
}

