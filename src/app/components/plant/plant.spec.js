describe("Plant component controller:", function() {
	let plantServ, $componentController, ctrl;

	beforeEach(() => {
		angular.mock.module('angularPlant');

		inject(function (_$componentController_, plantService) {
			$componentController = _$componentController_;
			plantServ = plantService;
		});

		let violet = {"name":"Violet",
			"age":"4",
			"waterInterv":"5",
			"lastWatered":"2016-07-29T14:05:46.477Z",
			"image":"image.jpg"
		};
		ctrl = $componentController('plant', {plantService: plantServ}, {plant : violet});
	});

	it('should call plantService.deletePlant() once', function() {
		spyOn(plantServ, 'deletePlant');
		ctrl.deletePlant(ctrl.plant);
		expect(plantServ.deletePlant.calls.count()).toEqual(1);
	});

	it('should call plantService.needsWatering() once', function() {
		spyOn(plantServ, 'needsWatering');
		ctrl.needsWatering(ctrl.plant);
		expect(plantServ.needsWatering.calls.count()).toEqual(1);
	});

	it('should call plantService.waterNow() once', function() {
		spyOn(plantServ, 'waterNow');
		ctrl.waterNow(ctrl.plant);
		expect(plantServ.waterNow.calls.count()).toEqual(1);
	});
});