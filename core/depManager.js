// DB
const USER = require("../models/user.model");
const RESUME = require("../models/resume.model");
const SITE = require("../models/site.model");

const depManager = {
  // DB
  USER,
  RESUME,
  SITE
};

module.exports = depManager;
