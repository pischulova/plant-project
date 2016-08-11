describe("Register component controller:", function() {
	let plantServ, $componentController, ctrl, violet;

	beforeEach(() => {
		angular.mock.module('angularPlant');

		inject(function (_$componentController_, plantService) {
			$componentController = _$componentController_;
			plantServ = plantService;
		});

		violet = {"name":"Violet",
			"age":"4",
			"waterInterv":"5",
			"lastWatered":"2016-07-29T14:05:46.477Z",
			"image":"image.jpg"
		};
		ctrl = $componentController('register', {plantService: plantServ});
	});

	it('should call plantService.registerPlant() once', function() {
		spyOn(plantServ, 'addPlant');
		ctrl.registerPlant(violet);
		expect(plantServ.addPlant.calls.count()).toEqual(1);
	});
});