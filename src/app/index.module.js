import "angular-translate";

import { config } from './index.config';
import { translate } from './index.translate';
import { routerConfig } from './index.route';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { plantService } from '../app/services/plantService';
import { serverService } from '../app/services/serverService';
import { register } from '../app/components/register/register';
import { edit } from '../app/components/edit/edit';
import { board } from '../app/components/dashboard/board';
import { plant } from '../app/components/plant/plant';

angular.module('angularPlant', ['ngSanitize', 'ngMessages', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'pascalprecht.translate'])
  .component('register', register)
  .component('edit', edit)
  .component('board', board)
  .component('plant', plant)
  .config(config)
  .config(routerConfig)
  .config(translate)
  .factory('plantService', plantService)
  .factory('serverService', serverService)
  .directive('acmeNavbar', NavbarDirective);

