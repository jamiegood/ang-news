'use strict';

/*
inject POst service into controller
 */
app.controller('PostsCtrl', function($scope, $location, Post) {

    $scope.posts = Post.all;

    $scope.post = {
        url: 'http://',
        title: ''
    };

/*    $scope.submitPost = function() {

        Post.create($scope.post).then(function(ref) {
            $location.path('/posts/' + ref.name());

            $scope.post = {url: 'http://', title: ''};
        });

    };*/

    $scope.deletePost = function(postId) {
        // delete post with index 'index
        Post.delete(postId);

    };
});