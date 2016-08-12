export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($translate) {
    'ngInject';
    let self = this;

    self.translateAll = translateAll;

    function translateAll(lang) {
      $translate.use(lang);
    }
  }
}
