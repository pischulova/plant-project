import * as angular from 'angular';

import {MainController} from "./controllers/MainController";
import {storage} from "./controllers/LocalStorage";

let app = angular.module('plant', []);
app.controller('MainController', MainController);
app.factory('LS', storage);
