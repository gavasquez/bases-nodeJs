const axios = require('axios');

// TODO: con los headers
// const httpClient = (headers)  => {
//     return {
//         get: async (url) => {
//             const { data } = await axios.get(url, headers);
//             return data;
//         },
//         post: async (url) => { },
//         delete: async (url) => { },
//     };
// };

const httpClientPlugin = {
    //TODO: Con fetch
    // get: async (url) => {
    //     const response = await fetch(url);
    //     return await response.json();
    // },
    //TODO: Con Axios
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
    post: async (url) => { },
    delete: async (url) => { },
};

module.exports = {
    http: httpClientPlugin
};