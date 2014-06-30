'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('angNewsApp'));

  var PostsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    PostsCtrl = $controller('PostsCtrl', {
      $scope: scope
    });


  }));

  it('should attach an object post  to the scope', function () {
    expect(scope.post.length).toBe(1);
  });
});
