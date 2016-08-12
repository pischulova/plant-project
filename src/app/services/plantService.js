export function plantService(serverService) {
    let millisInDay = 86400000;
    let plants = serverService.getAllPlants();
    let service = {
        addPlant: addPlant,
        deletePlant: deletePlant,
        editPlant: editPlant,
        getPlants: getPlants,
        needsWatering: needsWatering,
        waterNow: waterNow

    };
    return service;

    function addPlant(plant) {
        serverService.addPlant(plant, pushSavedPlantToPlants);
    }

    function deletePlant(plant) {
        serverService.deletePlant(plant.name);
        var index = plants.indexOf(plant);
        plants.splice(index, 1);
    }

    function editPlant(plant) {
        serverService.editPlant(plant, pushSavedPlantToPlants);
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

    function pushSavedPlantToPlants(data) {
        plants.forEach(function(item, i, plants) {
            if (item.name == data.name) {
                plants.splice(i, 1);
            }
        });
        plants.push(data);
    }

    function waterNow(plant) {
        plant.lastWatered = new Date();
        serverService.waterPlant(plant.name);
    }
}
plantService.$inject = ['serverService'];