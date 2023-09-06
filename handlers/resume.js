
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const processHandler = require("../core/processHandler");
const authenticate = require("../middlewares/authenticate");

const corsOrigin = require("../core/cors_origin");

const app = express();
const resumeService = require("../services/resume");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsOrigin());

app.use(authenticate.validateAccessToken)

app.post("/resume", processHandler(resumeService.create));
app.put("/resume", processHandler(resumeService.update));
app.delete("/resume", processHandler(resumeService.deleteResume));
app.get("/resume", processHandler(resumeService.get));
app.get("/resumes", processHandler(resumeService.getAll));
app.get("/user-resumes", processHandler(resumeService.getByUser));

module.exports.handler = serverless(app, {
    callbackWaitsForEmptyEventLoop: false
});