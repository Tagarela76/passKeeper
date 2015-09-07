'use strict';

var keystone = require('keystone');

/**
 * route handler for POST /api/user/register
 */
function register(req, res) {
    console.log('user');
    res.status(200);
}

module.exports = {
    register: register
};