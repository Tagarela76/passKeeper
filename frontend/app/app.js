'use strict';
angular.module('passKeeperApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {template: 'views/home.html', controller: HomeCtrl})
            .when('/register', {template: 'views/register.html', controller: RegisterCtrl})
            .when('/login', {template: 'views/login.html', controller: LoginCtrl})
            //.when('/edit/:id', {template: 'views/edit.html', controller: EditCtrl})
            .otherwise({redirectTo: '/list'});
    },
    ]);