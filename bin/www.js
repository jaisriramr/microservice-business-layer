const app = require("../app");

const http = require("http");

let port = process.env.PORT;

app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server started for read service at port " + port);
})

