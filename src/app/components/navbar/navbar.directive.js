export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment, $translate) {
    'ngInject';
    let self = this;

    // "this.creationDate" is available by directive option "bindToController: true"
    self.relativeDate = moment(this.creationDate).fromNow();
    self.translateAll = translateAll;

    function translateAll(lang) {
      $translate.use(lang);
    }
  }
}
