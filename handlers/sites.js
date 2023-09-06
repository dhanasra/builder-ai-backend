
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const processHandler = require("../core/processHandler");
const authenticate = require("../middlewares/authenticate");

const corsOrigin = require("../core/cors_origin");

const app = express();
const siteService = require("../services/sites");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsOrigin());

app.use(authenticate.validateAccessToken)

app.post("/site", processHandler(siteService.create));

module.exports.handler = serverless(app, {
    callbackWaitsForEmptyEventLoop: false
});