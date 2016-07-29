export function serverStorage($resource) {
    let serverUrl = 'https://nodejs-alyonapischulova.c9users.io/plants/:name';
    
    return {
        addPlant: function(obj, callback) {
            var plant = new ($resource(serverUrl));
            plant.name = obj.name;
            plant.age = obj.age;
            plant.waterInterv = obj.waterInterv;
            plant.lastWatered = new Date();
            plant.image = obj.image;
            console.log(plant);
            plant.$save().then(callback);
        },
        getAllPlants: function() {
            return $resource(serverUrl).query();
        },
        waterPlant: function(plantName) {
            $resource(serverUrl).get({name: plantName}, (data) => {
                console.log(data);
                data.lastWatered = new Date();
                data.$save();
            });
        },
        deletePlant: function(plantName) {
            var Plant = $resource(serverUrl);
            Plant.delete({name: plantName});
        },
    };
}