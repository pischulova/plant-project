import * as angular from 'angular';
import "angular-translate";
import "angular-resource";

import {MainController} from "./controllers/MainController";
import {localStorage} from "./services/LocalStorage";
import {serverStorage} from "./services/ServerStorage";
import {translate} from "./services/Translate"; 

let app = angular.module('plant', ['pascalprecht.translate', 'ngResource']);
// app.factory('storage', localStorage);
app.factory('storage', serverStorage);
app.controller('MainController', ['$scope', '$translate', 'storage', MainController]);
app.config(translate);
