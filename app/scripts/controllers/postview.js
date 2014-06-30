'use strict';

/*
injust scope and url params servive and Post/firebase service
 */
app.controller('PostViewCtrl', function($scope, $routeParams, Post){
    $scope.jamie = 'jamie was here';

    $scope.post = Post.find($routeParams.postId);

});