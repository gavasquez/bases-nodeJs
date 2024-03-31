// const { getAge, getUuid } = require('../plugins');

const buildMakePerson = ({ getUuid, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }

    }
}

// const buildPerson = ({ name, birthdate }) => {
//     return {
//         id: getUuid(),
//         name: name,
//         birthdate: birthdate,
//         age: getAge(birthdate),
//     }
// }

// const obj = {
//     name: 'Jhon Doe',
//     birthdate: '1996-07-15'
// }
// const jhon = buildPerson(obj);

// console.log(jhon);

module.exports = {
    buildMakePerson,
}