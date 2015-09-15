'use strict';
var express = require('express');
var keystone = require('keystone');
var passport = require('passport');

var config = require('./config');
var app = express();
var routes = require('./routes');


//init keystone
keystone.init({
    'name': 'passKeeper',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': ['public'],

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': 'mongodb://' + config.mongodb.db_host + ':' + config.mongodb.db_port + '/' + config.mongodb.db_name,

    'session': true,
    'auth': true,
    'user model': 'User',
    'host': config.server.host,
    'port': config.server.port,
    'cookie secret': config.server.cookie_secret
});


keystone.set('app', app);
require('./models');
keystone.set('routes', routes);

module.exports = keystone;
