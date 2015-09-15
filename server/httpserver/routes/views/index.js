//var keystone = require('keystone');
//
//function index(req, res){
//    var view = new keystone.View(req, res);
//
//    view.render('index');
//}
//
//module.exports = {
//    index: index
//};
var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);

    view.render('index');

}