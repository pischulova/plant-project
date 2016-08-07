export function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/main/main.html',
		controller: 'MainController',
		controllerAs: 'main'
	})
	.state('dashboard', {
		url: '/dashboard',
		template: '<board></board>'
	})
	.state('register', {
		url: '/register',
		template: '<register></register>'
	});

	$urlRouterProvider.otherwise('/');
}
