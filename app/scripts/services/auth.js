'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseSimpleLogin(ref);
    var loggedInState = false;

    var Auth = {
        register: function (user) {
            //this shoudl be in callback.
            //I.E. since register success set flag to true
            loggedInState = true;
            return auth.$createUser(user.email, user.password)
                .then(function(authUser) {
                    console.log('++++ AuthUser +++');
                    console.log(authUser);
                    loggedInState = true;
                 });
        },
        //check if user is logged in
        signedIn: function () {
            auth.$getCurrentUser().then(function(currentUser) {
                console.log(currentUser);
                return currentUser !== null;
            }, function() {
                console.log('error');
            });
        },
        login: function(user) {
            return auth.$login('password', user)
                .then(function() {
                    loggedInState = true;
                });
        },
        logout: function () {
            loggedInState = false;
            auth.$logout();
        }
    };

    $rootScope.signedInX = function () {

        //return true;
        console.log('SIGNEDINXXX');
        console.log(loggedInState);

        return loggedInState;
        //return Auth.signedIn();
    };

    return Auth;

});