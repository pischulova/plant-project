export class MainController {
  constructor($scope, $translate, storage) {
    $scope.plants = storage.getAllPlants();
    
    $scope.addPlant = function() {
      console.log($scope.new);
      storage.addPlant($scope.new, (data) => {
        $scope.plants.push(data);
      });
    };
    
    $scope.orderProp = 'name';
    $scope.isOrderReverse = false;
    
    $scope.tab = function(tabIndex) {
      switch (tabIndex) {
        case 0:
          $scope.orderProp = 'name';
          break;
        case 1:
          $scope.orderProp = 'age';
          break;
        case 2:
          $scope.orderProp = 'lastWatered';
      }
      if ($scope.isOrderReverse == false) {
        $scope.isOrderReverse = true;
      }
      else {
        $scope.isOrderReverse = false;
      }
    };
    
    $scope.needsWatering = function(plant) {
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
    };
    
    $scope.waterNow = function(plant) {
      plant.lastWatered = new Date();
      storage.waterPlant(plant.name);
    };
    
    $scope.translateAll = function(lang) {
      $translate.use(lang);
    };
    
    $scope.deletePlant = function(plant) {
      storage.deletePlant(plant.name);
      var index = $scope.plants.indexOf(plant);
      $scope.plants.splice(index, 1);
    };
  }
}