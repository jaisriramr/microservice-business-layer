const DB_URL = process.env.DB_URL;
const invoke = require("../../lib/http/invoke");

let createUser = async (query) => {
    try {

        var queryObject = {
            url: DB_URL,
            database: "ecom",
            client: "users",
            docType: 0,
            query: query,
        }

        let response = await invoke.makeHttpCall("post", "write", queryObject);
        return response.data.statusMessage;

    }catch(err) {
        return err;
    }
}

module.exports = {
    createUser
}