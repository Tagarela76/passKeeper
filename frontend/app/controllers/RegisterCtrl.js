'use strict';

function RegisterCtrl($scope) {

}

passKeeperApp.controller('RegisterCtrl', ['$scope', 'User', function($scope, User) {
    $scope.registerForm = {};
    $scope.saveData = function() {
        console.log($scope.registerForm);
        User.save($scope.registerForm, function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);

        });
    };
}])