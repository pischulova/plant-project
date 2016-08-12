    let templ = '../app/components/edit/edit.html';

    export let edit = {
        controller: editController,
        controllerAs: 'ct',
        templateUrl: templ
    };

    function editController(plantService, $stateParams, $state) {
        let self = this;
        self.editPlant = editPlant;
        self.plant = $stateParams.plant;

        function editPlant() {
            plantService.editPlant(self.plant);
            $state.go('dashboard');
        }
    }
    
    editController.$inject = ['plantService', '$stateParams', '$state'];