'use strict';

import {XMLHTTPRequestor} from "./XMLHTTPRequestor.js";

const startButton = document.getElementById('startButton');

let xmlRequester;

function init() {
    xmlRequester = new XMLHTTPRequestor();

    startButton.addEventListener('click', startRequestsChain);
}

async function getAllPeopleList() {
    const peopleJson = await xmlRequester.get('https://swapi.co/api/people');
    const people = JSON.parse(peopleJson).results.map(function ({ name }) {
        return name;
    });

    alert(people);
}

async function getSomePeople() {
    const somePeople = await Promise.all([
        xmlRequester.get('https://swapi.co/api/people/1/'),
        xmlRequester.get('https://swapi.co/api/people/3/'),
        xmlRequester.get('https://swapi.co/api/people/5/')
        ]);

    let people = [];

    somePeople.forEach(function (item) {
       people.push(JSON.parse(item).name);
    });

    alert(people);
}

function startRequestsChain() {
    const allPeopleList = getAllPeopleList();
    allPeopleList.then(function () {
        getSomePeople().then(function () {
            async function getPlanet() {
                const planet = await xmlRequester.get('https://swapi.co/api/planets/1/');

                return JSON.parse(planet);
            }

            getPlanet().then(function (planet) {
                async function getFirstResident(planet) {
                    const filmJson = await xmlRequester.get(planet.films[0]);

                    alert(`Planet "${planet.name}" was represented in film "${JSON.parse(filmJson).title}"`);
                }

                getFirstResident(planet);
            })
        });
    });
}


init();
