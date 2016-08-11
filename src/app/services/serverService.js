export function serverService($resource) {
    let serverUrl = 'https://nodejs-alyonapischulova.c9users.io/plants/:name';
    let service = {
        addPlant: addPlant,
        getAllPlants: getAllPlants,
        waterPlant: waterPlant,
        deletePlant: deletePlant
    };
    return service;

    function addPlant(obj, callback) {
        var plant = new($resource(serverUrl));
        plant.name = obj.name;
        plant.age = obj.age;
        plant.waterInterv = obj.waterInterv;
        plant.lastWatered = new Date();
        plant.image = obj.image;
        plant.$save().then(callback);
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

    function deletePlant(plantName) {
        var Plant = $resource(serverUrl);
        Plant.delete({
            name: plantName
        });
    }
}
serverService.$inject = ['$resource'];