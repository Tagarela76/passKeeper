'use strict';
var express = require('express');
var keystone = require('keystone');
var passport = require('passport');

var config = require('./config');

var app = express();

keystone.set('app', app);

//init keystone
keystone.init({
    'name': 'passKeeper',
    // 'favicon': 'public/favicon.ico',
    // 'less': 'public',
    //'static': ['public'],
    // 'views': 'templates/views',
     'view engine': 'jade',
    //'auto update': true,
    'mongo': 'mongodb://' + config.mongodb.db_host + ':' + config.mongodb.db_port + '/' + config.mongodb.db_name,
    //'session store': 'connect-mongostore',
//    'session store options': {
//        "db": {
//            "name": config.mongodb.db_name,
//            "servers": [{
//                "host": config.mongodb.db_host,
//                "port": config.mongodb.db_port
//            }
//            ]
//        }
//    },
    //'auth': true,
//    'user model': 'User',
    'host': config.server.host,
    'port': config.server.port,
    'cookie secret': config.server.cookie_secret
});

var routes = require('./routes');
keystone.set('routes', routes);

module.exports = keystone;
