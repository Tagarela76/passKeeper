//var keystone = require('keystone');
//var passport = require('passport');
//var  importRoutes = keystone.importer(__dirname);
//
//var api_basepath = '/api';
//
//// Handle 404 errors
//keystone.set('404', function(req, res, next) {
//    res.notfound();
//});
//
//
//// Handle other errors
////keystone.set('500', function(err, req, res, next) {
////    var title, message;
////    if (err instanceof Error) {
////        message = err.message;
////        err = err.stack;
////    }
////    res.err(err, title, message);
////});
//
//function commonRoutes(app){
//    var views =  importRoutes('./views');
//    //console.log(views.common.index);
//    app.get('/', views.common.index);
//};
//
//function userRoutes(app) {
//    var api = importRoutes('./api');
////    app.route(api_basepath + '/users/register')
////        .post(keystone.middleware.api, passport.initialize(), passport.session(), api.user.register);
//
//
//
//}
//// Bind Routes
//exports = module.exports = function(app) {
//    userRoutes(app);
//    commonRoutes(app);
//}


var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname);



// Handle 404 errors
keystone.set('404', function(req, res, next) {
    res.notfound();
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});

// Load Routes
var routes = {
    views: importRoutes('./views')
};

// Bind Routes
exports = module.exports = function(app) {

    app.get('/', routes.views.index);

}