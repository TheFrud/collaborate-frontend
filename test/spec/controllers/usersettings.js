'use strict';

describe('Controller: UsersettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('collaborateApp'));

  var UsersettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersettingsCtrl = $controller('UsersettingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
