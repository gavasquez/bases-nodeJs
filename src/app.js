// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const { getUuid, getAge } = require('./plugins');
// console.log(emailTemplate)
// getUserById(1, (error, user) => {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log(user);
// });
// const makePerson = buildMakePerson({ getUuid, getAge });
// const obj = {
//     name: 'Jhon Doe',
//     birthdate: '1996-07-15'
// }
// const jhon = makePerson(obj);
// console.log(jhon)

const getPokemonById = require('./js-foundation/06-promises');


// const name = getPokemonById(1, (pokemon ) => {
//     console.log({pokemon})
// });
// console.log(name)

getPokemonById(1)
    .then(pokemon => console.log({pokemon}))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'));