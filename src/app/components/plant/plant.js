    let templ = '../app/components/plant/plant.html';

    export let plant = {
        bindings: {
            'plant': '='
        },
        controller: plantController,
        templateUrl: templ
    };

    function plantController(plantService, $state) {
        let self = this;

        self.deletePlant = deletePlant;
        self.editPlant = editPlant;
        self.needsWatering = needsWatering;
        self.waterNow = waterNow;

        function deletePlant(plant) {
            plantService.deletePlant(plant);
        }

        function editPlant(plant) {
            $state.go('edit', {plant: plant});
        }

        function needsWatering(plant) {
            return plantService.needsWatering(plant);
        }

        function waterNow(plant) {
            plantService.waterNow(plant);
        }
    }

    plantController.$inject = ['plantService', '$state'];