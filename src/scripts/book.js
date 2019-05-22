'use strict';

let currentBookText;
let nextIndex = 0;
let textLineArray;

function resetTextLines() {
    textLineArray = currentBookText.split('\n');
}

function replaceDynamicParameters(name, age) {
    return `His name was ${name} and he was ${age} years old.
    ${name} sat on a seat in Madison Square, New York, and looked up at the sky. A dead leaf fell onto his arm.
    Winter was coming, and ${name} knew that he must make his plans. He moved unhappily on his seat. He wanted three
    months in a nice, warm prison, with food and good friends. This was how he usually spent his winters. And now it
    was time, because, at night on his seat in the square, three newspapers did not keep out the cold.
    So ${name} decided to go to prison, and at once began to try his first plan. It was usually easy. He ate dinner
    in an expensive restaurant. Then he told them he had no money and they called a policeman. Nice and easy, with
    no trouble. So ${name} left his seat, and walked slowly along the street. Soon he came to a bright restaurant
    on Broadway. Ah! This was all right. He just had to get to a table in the restaurant and sit down. That was
    all, because, when he sat down, people could only see his coat and his shirt, which were not very old.
    Nobody could see his trousers. He thought about the meal – not too expensive, but good.`;
}

export class Book {
    constructor({ name = 'Billy', age = '20' }) {
        currentBookText = replaceDynamicParameters(name, age);
        resetTextLines();
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

