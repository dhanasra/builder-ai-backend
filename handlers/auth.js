
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const processHandler = require("../core/processHandler");

const corsOrigin = require("../core/cors_origin");

const app = express();
const authService = require("../services/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsOrigin());

app.post("/authenticate", processHandler(authService.authenticate));

module.exports.handler = serverless(app, {
    callbackWaitsForEmptyEventLoop: false
});