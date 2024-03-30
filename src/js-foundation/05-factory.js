const { getAge, getUuid } = require('../plugins');

const obj = {
    name: 'Jhon Doe',
    birthdate: '1996-07-15'
}

const buildPerson = ({ name, birthdate }) => {
    return {
        id: getUuid(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const jhon = buildPerson(obj);

console.log(jhon);