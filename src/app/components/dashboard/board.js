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

        function order(order) {
            self.isOrderReverse = (self.orderProp === order) ? !self.isOrderReverse : false;
            self.orderProp = order;
        }

        function translateAll(lang) {
            $translate.use(lang);
        }
    }
    
    boardController.$inject = ['$translate', 'plantService'];