'use strict';

/**
 * @ngdoc function
 * @name webDevTestApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the webDevTestApp
 */
angular.module('webDevTestApp')
  .controller('PersonCtrl', function ($scope, $routeParams, Global) {
    
    console.log($routeParams.id);       
    Global.getPersons().then(function(persons){
        $scope.person = Global.getPersonById($routeParams.id, persons);
		console.log($scope.person);	
	});             

  });
