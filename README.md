# Progress

## so far
6 of 8

Current one:

[latest](http://www.thinkster.io/angularjs/4DYrJRxTyT/7-creating-your-own-user-data-using-firebase)
Creating a controller for authentication

## Firebase
Cloud app to store data.
Use for CRUD of posts

[Firebase Forge (Admin)](https://luminous-fire-5077.firebaseio.com/)


## Filters
For formatting objects when in the templates.
a filter returns a function.
This function returns the output of the filter

## Directives
for custom tags.
Tag replaced with a JS object with funcationaliu
I.E. <login-form>
LoginForm directive has all the login functionaliy

## Services
* Business logic
* object for accessing APIs
* Inject into modules if needed
* Return on obj to inject into say controllers I.E. Post.get(1)

I.E.
* authentication service
* game logic for a Directive

Don't
* Dom manipulation
*

## Controllers
<div ng-controller="MyCtrl"/>
A scope for controller objs and controller functionaly

Attach controller specifc fucntions to $scope

Can be in the HTML as in above

Or specifed by the router module
ng-view gets replaced with the template specified along with the controller in the router module


## Tips
$rootScope: available everywhere
For use by a global variable or function. I.E. isLoggedIn? function

Controller should inject $scope

$location service for redirects (angular style)

variable exists the show <p>
<p ng-show="error" class="text-danger">{{ error }}</p>

# Questions
Firebase service. Why do I need need to include that JS file.
Because it's installed as a angular module via bower? Angular 'knows' about it


## Templates
output something
{{ jamie }}

showing hiding: ng-show direction. Boolean
I.E. if signedIn()m true show the div.

        <ul class="nav navbar-nav navbar-right" ng-show="signedIn()">
            <li>
                <a href="#" ng-click="logout()">Logout</a>
            </li>
        </ul>

# Bugs.
Register does not login
angular regsiter no longer logs the user in automatically

http://stackoverflow.com/questions/23064703/firebase-simple-login-tutorial-missing-user
http://stackoverflow.com/questions/23107080/cant-show-logout-button-after-createuser
