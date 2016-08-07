    let templ = '../app/components/register/register.html';

    export let register = {
        controller: registerController,
        templateUrl: templ
    };

    function registerController($scope, plantService) {
        let self = this;
        self.registerPlant = registerPlant;

        function registerPlant(plant) {
            plantService.addPlant(plant);
        }
    }
    
    registerController.$inject = ['$scope', 'plantService'];