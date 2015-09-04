'use strict';
var passKeeperApp = angular.module('passKeeperApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {templateUrl: 'app/views/home.html', controller: HomeCtrl})
            .when('/register', {templateUrl: 'app/views/register.html', controller: RegisterCtrl})
            .when('/login', {templateUrl: 'app/views/login.html', controller: LoginCtrl})
            //.when('/edit/:id', {template: 'views/edit.html', controller: EditCtrl})
            .otherwise({redirectTo: '/home'});
    },
    ]);


passKeeperApp.controller('menuCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.isActive = function(path){
            //console.log(location.path());
            if ($location.path().substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }

        }
    }]);
