/* global malarkey:false, moment:false */
import "angular-translate";

import { config } from './index.config';
import { translate } from './index.translate';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { plantService } from '../app/services/plantService';
import { serverService } from '../app/services/serverService';
import { register } from '../app/components/register/register';
import { board } from '../app/components/dashboard/board';
import { plant } from '../app/components/plant/plant';

angular.module('angularPlant', ['ngSanitize', 'ngMessages', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'pascalprecht.translate'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .component('register', register)
  .component('board', board)
  .component('plant', plant)
  .config(config)
  .config(routerConfig)
  .config(translate)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .factory('plantService', plantService)
  .factory('serverService', serverService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);

