
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const processHandler = require("../core/processHandler");

const corsOrigin = require("../core/cors_origin");

const app = express();
const parserService = require("../services/parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsOrigin());

app.post("/parse-pdf", processHandler(parserService.parsePdf));

module.exports.handler = serverless(app, {
    callbackWaitsForEmptyEventLoop: false
});