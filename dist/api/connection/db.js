"use strict";
var mysql = require('mysql'); // node-mysql module
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'smiletime'
});
var wrapper = require('node-mysql-wrapper');
exports.db_connection = wrapper.wrap(connection);
//import {wrap} from "node-mysql-wrapper";
//let db = wrap(connection);
//connection.connect();
