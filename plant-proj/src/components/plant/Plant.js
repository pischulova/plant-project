    let templ = './src/components/plant/plant.html';

    export let plant = {
        bindings: {
            'plant': '='
        },
        controller: function($scope, plantFactory) {
            let self = this;

            self.needsWatering = function(plant) {
                return plantFactory.needsWatering(plant);
            };
            self.deletePlant = function(plant) {
                plantFactory.deletePlant(plant);
            };
            self.waterNow = function(plant) {
                plantFactory.waterNow(plant);
            };
            self.deletePlant = function(plant) {
                plantFactory.deletePlant(plant);
            };
        },
        templateUrl: templ

    };