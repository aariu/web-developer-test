'use strict';

/**
 * @ngdoc function
 * @name webDevTestApp.controller:InsertCtrl
 * @description
 * # InsertCtrl
 * Controller of the webDevTestApp
 */
angular.module('webDevTestApp')
  .controller('InsertCtrl', function ($scope, $routeParams, Global) {
    
  	$scope.insertUser = function() {

  		// Check input value
  		if ($scope.name == '' || $scope.name == undefined || $scope.name == null) return;

  		Global.insertUser($scope.name).then(function(){});
  		console.log('insert');  		
  	}

  });
