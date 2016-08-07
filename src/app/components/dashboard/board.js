    let templ = '../app/components/dashboard/board.html';

    export let board = {
        controller: boardController,
        templateUrl: templ
    };

    function boardController($translate, plantService) {
        let self = this;

        self.isOrderReverse = false;
        self.order = order;
        self.orderProp = 'name';
        self.plants = plantService.getPlants();
        self.translateAll = translateAll;

        function order(tabIndex) {
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
        }

        function translateAll(lang) {
            $translate.use(lang);
        }
    }
    
    boardController.$inject = ['$translate', 'plantService'];