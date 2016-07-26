export class MainController {
    constructor($scope, $window, LS) {

        $scope.plants = LS.getPlantArray() || LS.nitStorage();

        $scope.addPlant = function(name, age, needWater, imageLink) {
            var newPlant = {
                'name': name,
                'age': parseFloat(age),
                'waterAfterDays': needWater,
                'lastWatered': new Date(),
                'image': imageLink
            };
            $scope.plants.push(newPlant);
            return LS.addPlant(newPlant);
        };
        
        $scope.orderProp = 'name';
        $scope.isOrderReverse = false;

        $scope.tab = function (tabIndex) {
          switch (tabIndex) {
            case 0:
              $scope.orderProp='name';
              break;
            case 1:
              $scope.orderProp='age';
              break;
            case 2:
              $scope.orderProp='lastWatered';
          }
          if ($scope.isOrderReverse == false) {
            $scope.isOrderReverse = true;
          } else {
            $scope.isOrderReverse = false;
          }
        };
        
        $scope.needsWatering = function(plant) {
          var waterNeeded = false;
          
          var today = new Date().getTime();
          var lastWateredInMillis = new Date(plant.lastWatered).getTime();
          var needsWateringInMillis = (plant.waterAfterDays)*86400000;
         
          if ((lastWateredInMillis + needsWateringInMillis) <= today) {
            waterNeeded = true;
          }
          return waterNeeded; 
        };
    }
}