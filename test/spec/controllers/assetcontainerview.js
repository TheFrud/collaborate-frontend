'use strict';

describe('Controller: AssetcontainerviewCtrl', function () {

  // load the controller's module
  beforeEach(module('collaborateApp'));

  var AssetcontainerviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssetcontainerviewCtrl = $controller('AssetcontainerviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
