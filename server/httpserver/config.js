var defaults = {
    mongodb: {
        db_name: 'passkeeper',
        db_host: 'localhost',
        db_user: '',
        db_pw: '',
        db_port: 27017
    },
    server: {
        port: "7777",
        cookie_secret: '123',
        host: 'localhost'
    }
}

var config = defaults;

module.exports = config;