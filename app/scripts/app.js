/* global app: true */

'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angNewsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ]);


app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/posts/:postId', {
                templateUrl: 'views/postview.html',
                controller: 'PostViewCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    });

app.constant('FIREBASE_URL', 'https://luminous-fire-5077.firebaseio.com/');