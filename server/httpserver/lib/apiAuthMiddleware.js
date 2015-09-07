///**
// * pass all non-public API request through this to make sure we have a logged in user
// */
//'use strict';
//var keystone = require('keystone');
//var passport = require('passport');
//var config = require('../config');
//var AppUser = keystone.list('AppUser');
//
//var Cryptr = require("cryptr"),
//  cryptr = new Cryptr(keystone.get('cookie secret'));
//
//
//
//module.exports = function() {
//  passport.serializeUser(function(user, done) {
//    done(null, cryptr.encrypt(user));
//  });
//  passport.deserializeUser(function(user, done) {
//    AppUser.model.findOne({userId: cryptr.decrypt(user)}, function(err, userObj){
//      if(err){
//        return done(err);
//      }
//      // console.log(userObj);
//      done(null, userObj);
//    });
//  });
//  passport.use(new FacebookTokenStrategy({
//    clientID: config.facebook.app_id,
//    clientSecret: config.facebook.app_secret,
//    authorizationURL: 'https://www.facebook.com/v' + config.facebook.api_version + '/dialog/oauth',
//    profileFields: ['id']
//  }, function(accessToken, refreshToken, profile, done) {
//    AppUser.model.findOne({
//      facebook_id: profile.id
//    }, function(err, user) {
//      if (err) {
//        return done(err);
//      }
//      if (!user) {
//        return done(null, '0');
//      }
//      return done(err, user.userId);
//    });
//  }));
//};
//
//
//// module.exports = passport;
