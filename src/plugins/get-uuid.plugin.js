const { v4: uuidV4 } = require('uuid');

const getUuid = () => {
    return uuidV4();
}

module.exports = {
    getUuid,
}