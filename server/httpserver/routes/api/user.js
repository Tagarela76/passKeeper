'use strict';

var keystone = require('keystone');
var http = require("http");
/**
 * route handler for POST /api/user/register
 */
function register(req, res) {
    console.log('user');
    res.apiResponse({});
}

module.exports = {
    register: register
};