    let templ = '../app/components/plant/plant.html';

    export let plant = {
        bindings: {
            'plant': '='
        },
        controller: boardController,
        templateUrl: templ
    };

    function boardController(plantService) {
        let self = this;

        self.deletePlant = deletePlant;
        self.needsWatering = needsWatering;
        self.waterNow = waterNow;

        function deletePlant(plant) {
            plantService.deletePlant(plant);
        }

        function needsWatering(plant) {
            return plantService.needsWatering(plant);
        }

        function waterNow(plant) {
            plantService.waterNow(plant);
        }
    }

    boardController.$inject = ['plantService'];