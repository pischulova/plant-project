import * as angular from 'angular';
import "angular-translate";
import "angular-resource";
import "angular-ui-router";

import { serverStorage } from "./services/ServerStorage";
import { translate } from "./services/Translate";
import { plantFactory } from "./services/PlantFactory";
import { register } from "./components/register/Register";
import { board } from "./components/dashboard/Board";
import { plant } from "./components/plant/Plant";

let app = angular.module('plant', ['pascalprecht.translate', 'ngResource', 'ui.router']);
// app.factory('storage', localStorage);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('index', {
            url: '/',
            template: '<board></board>'
        })
        .state('register', {
            url: '/register',
            template: '<register></register>'
        });
});
app.config(translate);

app.factory('server', serverStorage);
app.factory('plantFactory', plantFactory);
app.component('register', register);
app.component('board', board);
app.component('plant', plant);