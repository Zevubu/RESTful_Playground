const Router = require("express").Router();
const API = require('./api/index')

Router.use('/api', API);


module.exports = Router;