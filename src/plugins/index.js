const { getAge } = require("./get-age.plugin");
const { getUuid } = require("./get-uuid.plugin");
const { http } = require("./http-client.plugin");


module.exports = {
    getUuid,
    getAge,
    http
}