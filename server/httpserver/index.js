'use strict';
var keystone = require('./server')

keystone.start({
    onHttpServerCreated: function(){
        //chatServer.init(keystone.httpServer);
        var server = keystone.httpServer;
    }
});
