export function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
	.state('dashboard', {
		url: '/',
		template: '<board></board>'
	})
	.state('register', {
		url: '/register',
		template: '<register></register>'
	})
	.state('edit', {
		url: '/edit',
		template: '<edit></edit>',
		params: {plant: null}
	});

	$urlRouterProvider.otherwise('/');
}
