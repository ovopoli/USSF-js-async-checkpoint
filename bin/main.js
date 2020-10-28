#!/usr/bin/env node

const fetch = require("node-fetch");
const fs = require ('fs');
let poke_input = fs.readFileSync('bin/input.txt', 'utf8')

poke_input = poke_input.replace(/(\r)/gm,'')
let poke_input_arr = poke_input.split('\n')
poke_input_arr = poke_input_arr.map(entry => entry.toLowerCase());

async function read_pokemon_data(name) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => data.json())
        .then(data => {
            console.log(name[0].toUpperCase() + name.substring(1) + ":" + data.types.map(element => element.type.name).join(', '))
        })
        .catch(err => console.log(err));
}
poke_input_arr.forEach(entry => read_pokemon_data(entry))