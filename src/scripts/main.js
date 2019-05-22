'use strict';

import {XMLHTTPRequestor} from "./XMLHTTPRequestor.js";

const startButton = document.getElementById('startButton');

let xmlRequester;

function init() {
    xmlRequester = new XMLHTTPRequestor();

    startButton.addEventListener('click', startRequestsChain);
}

async function startRequestsChain() {
    const peopleJson = await xmlRequester.get('https://swapi.co/api/people');
    const people = JSON.parse(peopleJson).results.map(({ name }) => {
        return name;
    });

    alert('1) ' + people);

    const somePeople = await Promise.all([
        xmlRequester.get('https://swapi.co/api/people/1/'),
        xmlRequester.get('https://swapi.co/api/people/3/'),
        xmlRequester.get('https://swapi.co/api/people/5/')
    ]);

    let peopleList = [];

    somePeople.forEach(function (item) {
        peopleList.push(JSON.parse(item).name);
    });

    alert('2) ' + peopleList);

    const planetJson = await xmlRequester.get('https://swapi.co/api/planets/1/');
    const planet = JSON.parse(planetJson);

    const filmJson = await xmlRequester.get(planet.films[0]);

    alert(`3) Planet "${planet.name}" was represented in film "${JSON.parse(filmJson).title}"`);
}


init();
