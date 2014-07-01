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
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AuthCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthCtrl'
            })
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/posts/:postId', {
                templateUrl: 'views/postview.html',
                controller: 'PostViewCtrl'
            });
    });

app.constant('FIREBASE_URL', 'https://luminous-fire-5077.firebaseio.com/');