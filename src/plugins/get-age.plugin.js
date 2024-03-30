const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
    return (!birthdate) ? new Error('birthdate is requiered') : getAgePlugin(birthdate);
}

module.exports = {
    getAge
}