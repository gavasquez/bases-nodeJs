const { http } = require('../plugins/index');

//TODO: 1 forma
// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     fetch(url).then((response) => {
//         response.json().then(pokemon => {
//             return callback(pokemon.name);
//         })
//     });
// }
//TODO: 2 forma
// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     fetch(url).then((response) => {
//         return response.json();
//     })
//     .then(pokemon => {
//         callback(pokemon.name)
//     });
// }
//TODO: 3 forma
// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     return fetch(url).then((response) => {
//         return response.json();
//     }).then(pokemon => pokemon.name);
// }
//TODO: 4 forma
// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const response = await fetch(url);
//     const pokemon = await response.json();
//     return pokemon.name;
// }

//TODO: 5 forma
const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    console.log(pokemon.name)
    return pokemon.name;
}


module.exports = getPokemonById;