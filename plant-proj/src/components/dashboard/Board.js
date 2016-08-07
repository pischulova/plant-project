    let templ = './src/components/dashboard/board.html';

    export let board = {
        bindings: {},
        controller: function($translate, server, plantFactory) {
            let self = this;

            self.plants = plantFactory.getPlants();

            self.orderProp = 'name';
            self.isOrderReverse = false;

            self.tab = function(tabIndex) {
                switch (tabIndex) {
                    case 0:
                        self.orderProp = 'name';
                        break;
                    case 1:
                        self.orderProp = 'age';
                        break;
                    case 2:
                        self.orderProp = 'lastWatered';
                }
                if (self.isOrderReverse == false) {
                    self.isOrderReverse = true;
                }
                else {
                    self.isOrderReverse = false;
                }
            };
            self.translateAll = function(lang) {
                $translate.use(lang);
            };
        },
        templateUrl: templ

    };