// const functions = require('../utils');
// const _ = require('lodash');
// const JWT = require('jsonwebtoken');
const secret= require ('../dbconfig/secrets');
const Users = require('../models/users');


module.exports = (express)=>{

    const api = express.Router();

    require('./auth')(api, Users)

    return api;
}