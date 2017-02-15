'use strict';

/**
 * @ngdoc overview
 * @name webDevTestApp
 * @description
 * # webDevTestApp
 *
 * Main module of the application.
 */
angular
  .module('webDevTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/persons', {
        templateUrl: 'views/persons.html',
        controller: 'PersonsCtrl',
        controllerAs: 'persons'
      })
      .when('/person/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person'
      })
      .when('/insert', {
        templateUrl: 'views/insert.html',
        controller: 'InsertCtrl',
        controllerAs: 'insert'
      })
      .otherwise({
        redirectTo: '/persons'
      });

      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCLGeu6bzpd5uNBd7q-zEZgF4rc_kdUTJw',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
      });

  });