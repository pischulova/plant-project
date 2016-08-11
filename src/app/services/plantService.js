export function plantService(serverService) {
    let millisInDay = 86400000;
    let plants = serverService.getAllPlants();
    let service = {
        addPlant: addPlant,
        getPlants: getPlants,
        needsWatering: needsWatering,
        waterNow: waterNow,
        deletePlant: deletePlant
    };
    return service;

    function pushSavedPlantToPlants(data) {
        plants.push(data);
    }

    function addPlant(plant) {
        serverService.addPlant(plant, pushSavedPlantToPlants);
    }

    function getPlants() {
        return plants;
    }

    function needsWatering(plant) {
        var waterNeeded = false;
        var today = new Date().getTime();
        var lastWateredInMillis = new Date(plant.lastWatered).getTime();
        var waterIntervInMillis = (plant.waterInterv) * millisInDay;
        var nextWatering = lastWateredInMillis + waterIntervInMillis;
        if (nextWatering <= today) {
            waterNeeded = true;
        }
        plant.nextWater = Math.round((nextWatering - today) / millisInDay);
        plant.needsWater = waterNeeded;
        return waterNeeded;
    }

    function waterNow(plant) {
        plant.lastWatered = new Date();
        serverService.waterPlant(plant.name);
    }

    function deletePlant(plant) {
        serverService.deletePlant(plant.name);
        var index = plants.indexOf(plant);
        plants.splice(index, 1);
    }
}
plantService.$inject = ['serverService'];