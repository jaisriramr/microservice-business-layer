let instance = {
    baseURL: process.env.DATALAYER_ENDPOINT,
    timeout: 50000000,
    headers: { "Content-Type": "application/json" }
  };
  
module.exports = {
    instance
}