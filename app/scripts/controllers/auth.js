'use strict';

app.controller('AuthCtrl', function($scope, Auth, $location) {

    //if not logged in go to start
    if(Auth.signedIn()) {
        $location.path('/');
    }


    $scope.$on('$firebaseSimpleLogin:login', function () {
        $location.path('/');
    });

    $scope.login = function () {
        Auth.login($scope.user).then(function () {
            $location.path('/');
        }, function(error) {
            $scope.error = error.toString();
        });
    };

    $scope.register = function() {
        Auth.register($scope.user).then(function(authUser) {
            console.log(authUser);
            $location.path('/');
         }, function(error) {
            $scope.error = error.toSting();
        });
    };


});