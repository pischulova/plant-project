import * as angular from 'angular';

export function storage($window, $rootScope) {
    angular.element($window).on('storage', function(event) {
        if (event.key === 'my-storage') {
            $rootScope.$apply();
        }
    });

    return {
        initStorage: function() {
            var array = [{
                "name": "Anturium",
                "age": 2,
                "waterAfterDays": 4,
                "lastWatered": "2016-07-20T00:00:00.000Z",
                "image": "http://rasteniya.dp.ua/images/catalog/goods/gallery/32/big/221-anturium-andre-jeltii.jpg"
            }, {
                "name": "Kampanula",
                "age": 3,
                "waterAfterDays": 2,
                "lastWatered": "2016-07-22T00:00:00.000Z",
                "image": "http://solnsad.ru/image-kom-zveti/67_252.jpg"
            }, {
                "name": "Tangerine",
                "age": 8,
                "waterAfterDays": 3,
                "lastWatered": "2016-07-21T00:00:00.000Z",
                "image": "http://gardenclub.homedepot.com/wp-content/uploads/2013/08/plant-a-dwarf-citrus-tree-550x724.jpg"
            }, {
                "name": "Zamioculcas",
                "age": 5,
                "waterAfterDays": 5,
                "lastWatered": "2016-07-23T00:00:00.000Z",
                "image": "http://www.ikea.com/ru/ru/images/products/zamioculcas-rastenie-v-gorske__67488_PE181328_S4.JPG"
            }];
            $window.localStorage.setItem('array', JSON.stringify(array));
            return array;
        },
        addPlant: function(obj) {
            var array = JSON.parse($window.localStorage.getItem('array'));
            array.push(obj);
            console.log(array);
            $window.localStorage.setItem('array', JSON.stringify(array));
            return this;
        },
        getPlantArray: function() {
            var retrievedObject = $window.localStorage && $window.localStorage.getItem('array');
            return JSON.parse(retrievedObject);
        }

    };
}