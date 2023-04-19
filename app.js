const express = require("express");
const app = express();
const fileupload = require("express-fileupload")
require("dotenv").config()
const cors = require("cors");
var corsOptions = {
    origin: ['http://localhost:1600', 'http://localhost:1601', 'http://localhost:1602', 'http://localhost:1603', 'http://localhost:5000'],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(fileupload());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

app.use(function(req, res, next) {
    
    res.locals.baseURL = req.headers.host;
    next();
});

app.get("/", (req, res) => {
    res.json("welcome to read service")
})
app.invoke = require("./lib/http/invoke");
require("./route/read/index")({app: app})


module.exports = app;