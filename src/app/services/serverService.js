export function serverService($resource) {
    let serverUrl = 'https://nodejs-alyonapischulova.c9users.io/plants/:name';
    let service = {
        addPlant: addPlant,
        deletePlant: deletePlant,
        editPlant: editPlant,
        getAllPlants: getAllPlants,
        waterPlant: waterPlant        
    };
    return service;

    function addPlant(obj, callback) {
        var plant = new($resource(serverUrl));
        plant.name = obj.name;
        plant.age = obj.age;
        plant.waterInterv = obj.waterInterv;
        plant.lastWatered = new Date().getTime();
        plant.image = obj.image;
        plant.$save().then(callback);
    }

    function deletePlant(plantName) {
        var Plant = $resource(serverUrl);
        Plant.delete({
            name: plantName
        });
    }

    function editPlant(plant, callback) {
         $resource(serverUrl).get({
            name: plant.name
        }, (data) => {
            data.age = plant.age;
            data.waterInterv = plant.waterInterv;
            data.image = plant.image;
            data.$save().then(callback);
        });
    }

    function getAllPlants() {
        return $resource(serverUrl).query();
    }

    function waterPlant(plantName) {
        $resource(serverUrl).get({
            name: plantName
        }, (data) => {
            data.lastWatered = new Date();
            data.$save();
        });
    }
}
serverService.$inject = ['$resource'];