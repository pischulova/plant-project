describe('Component template: register', function () {
  let element, form, scope;

  beforeEach(angular.mock.module('angularPlant'));

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();

    element = angular.element('<form name="formReg">' +
      '<input ng-model="plant.name" name="name" ng-minlength="3" ng-maxlength="10" required="">' +
      '<input ng-model="plant.age" name="age" ng-pattern="/^[0-9]{1,3}$/" required="">' +
      '</form>');
    scope.plant = { name: null, age: null}
    element = $compile(element)(scope);
    form = scope.formReg;
    
    scope.$apply();
  }));

  it('should not be valid for short name', function() {
    form.name.$setViewValue('w');
    scope.$digest();
    expect(scope.plant.name).toBeUndefined();
    expect(form.name.$valid).toBe(false);
  });

  it('should be valid for name of 6 symbols', function() {
    form.name.$setViewValue('violet');
    scope.$digest();
    expect(scope.plant.name).toEqual('violet');
    expect(form.name.$valid).toBe(true);
  });

  it('should not be valid for age of letters', function() {
    form.age.$setViewValue('w');
    scope.$digest();
    expect(scope.plant.age).toBeUndefined();
    expect(form.age.$valid).toBe(false);
  });

  it('should be valid for age of digits', function() {
    form.age.$setViewValue('4');
    scope.$digest();
    expect(scope.plant.age).toEqual('4');
    expect(form.age.$valid).toBe(true);
  });

  it('should require age field', function() {
    form.age.$setViewValue('');
    scope.$digest();
    expect(scope.plant.age).toBeUndefined();
    expect(form.age.$valid).toBe(false);
  });

});