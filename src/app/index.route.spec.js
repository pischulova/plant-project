describe('app: index.route', () => {
    let $state, $rootScope;

    beforeEach(() => {
        angular.mock.module('angularPlant');

        inject((_$state_, _$rootScope_) => {
            $state = _$state_;
            $rootScope = _$rootScope_;
        });
    });

    it('should transit to dashboard state, and have url', () => {
        $state.transitionTo('dashboard');
        $rootScope.$apply();
        expect($state.current.name).toBe('dashboard');
        expect($state.current.url).toBe('/dashboard');
    });

    it('should transit to register state, and have url', () => {
        $state.transitionTo('register');
        $rootScope.$apply();
        expect($state.current.name).toBe('register');
        expect($state.current.url).toBe('/register');
    });

});
