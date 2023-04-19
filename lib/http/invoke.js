const axiosConfig = require("./axios").instance;
const axios = require("axios");

module.exports = {
    makeHttpCall: async function(method, url, postParam) {
        switch(method) {
            case "get":
                return await this.makeGetCall(url);
                break;
            case "post":
                return await this.makePostCall(url, postParam);
                break;
            case "put":
                return await this.makePutCall(url, postParam);
                break;
            case "patch":
                return await this.makePatchCall(url, postParam);
                break;
        }
    },

    makeGetCall: async function(url, postParam) {
        let config = axiosConfig;
        return await axios.get(url, config);
    },
    makePostCall: async function(url, postParam) {
        let config = axiosConfig;
        return await axios.post(url, postParam, config);
    },
    makePutCall: async function(url, postParam) {
        let config = axiosConfig;
        return await axios.put(url, postParam, config);
    },
    makePatchCall: async function(url, postParam) {
        let config = axiosConfig;
        return await axios.patch(url, postParam, config)
    }




}