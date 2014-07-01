'use strict';

/*
 inject POst service into controller
 */
app.controller('NavCtrl', function ($scope, $location, Post, Auth) {

    $scope.posts = Post.all;

    $scope.post = {
        url: 'http://',
        title: ''
    };

    $scope.submitPost = function () {

        Post.create($scope.post).then(function (ref) {
            $location.path('/posts/' + ref.name());

            $scope.post = {url: 'http://', title: ''};
        });

    };

    //logout method
    $scope.logout = function() {
      Auth.logout();
    };

   // $scope.signedIn = function() {
    ///    return Auth.signedIn();
   // };
});