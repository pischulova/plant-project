    let templ = '../app/components/register/register.html';

    export let register = {
        controller: registerController,
        templateUrl: templ
    };

    function registerController(plantService) {
        let self = this;
        self.registerPlant = registerPlant;

        function registerPlant(plant) {
            plantService.addPlant(plant);
        }
    }
    
    registerController.$inject = ['plantService'];