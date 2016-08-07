    let templ = './src/components/register/register.html';

    export let register = {
        bindings: {
            'value': '='
        },
        controller: function($scope, plantFactory) {
            let self = this;
            
            let newPl = {};
            self.registerPlant = function(plant) {
                plantFactory.addPlant(plant);
            };

        },
        templateUrl: templ

    };