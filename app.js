const express = require('express');
const app = express();
const server = require('http').Server(app);
require('./config')(app, express);

module.exports ={
    app, 
    server
}