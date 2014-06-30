'use strict';

/*
 inject POst service into controller
 */
app.controller('NavCtrl', function($scope, $location, Post) {

    $scope.posts = Post.all;

    $scope.post = {
        url: 'http://',
        title: ''
    };

    $scope.submitPost = function() {

        Post.create($scope.post).then(function(ref) {
            $location.path('/posts/' + ref.name());

            $scope.post = {url: 'http://', title: ''};
        });

    };
});