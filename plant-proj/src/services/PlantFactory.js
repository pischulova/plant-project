export function plantFactory(server) {
    let plants = server.getAllPlants();

    return {
        addPlant: function(plant) {
            server.addPlant(plant, (data) => {
                plants.push(data);
            });
        },
        getPlants: function() {
            return plants;
        },
        needsWatering: function(plant) {
            var waterNeeded = false;
            var today = new Date().getTime();
            var lastWateredInMillis = new Date(plant.lastWatered).getTime();
            var waterIntervInMillis = (plant.waterInterv) * 86400000;
            var nextWatering = lastWateredInMillis + waterIntervInMillis;
            if (nextWatering <= today) {
                waterNeeded = true;
            }
            plant.nextWater = Math.round((nextWatering - today) / 86400000);
            plant.needsWater = waterNeeded;
            return waterNeeded;
        },
        waterNow: function(plant) {
            plant.lastWatered = new Date();
            server.waterPlant(plant.name);
        },
        deletePlant: function(plant) {
            server.deletePlant(plant.name);
            var index = plants.indexOf(plant);
            plants.splice(index, 1);
        },

    };
}