describe("Board component controller:", function() {
	let $translate, plantServ, $componentController, ctrl;

	beforeEach(() => {
		angular.mock.module('angularPlant');

		inject(function (_$componentController_, _$translate_, plantService) {
            $componentController = _$componentController_;
            $translate = _$translate_;
            plantServ = plantService;
        });

        ctrl = $componentController('board', { $translate: $translate, plantService: plantServ });
	});

	it('should expose orderProp and isOrderReverse', function() {
		expect(ctrl.orderProp).toBeDefined();
		expect(ctrl.orderProp).toBe('name');
		expect(ctrl.isOrderReverse).toBe(false);
	});

	it('should change orderReverse when clicked on Order By buttons', function() {
		ctrl.order('name');
		expect(ctrl.isOrderReverse).toBe(true);
		ctrl.order('name');
		expect(ctrl.isOrderReverse).toBe(false);
		ctrl.order('age');
		expect(ctrl.isOrderReverse).toBe(false);
	});
});