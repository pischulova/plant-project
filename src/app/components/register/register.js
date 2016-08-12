    let templ = '../app/components/register/register.html';

    export let register = {
        controller: registerController,
        templateUrl: templ
    };

    function registerController(plantService, $state) {
        let self = this;
        self.registerPlant = registerPlant;

        function registerPlant(plant) {
            plantService.addPlant(plant);
            $state.go('dashboard');
        }
    }
    
    registerController.$inject = ['plantService', '$state'];