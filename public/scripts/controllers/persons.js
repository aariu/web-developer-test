'use strict';

/**
 * @ngdoc function
 * @name webDevTestApp.controller:PersonsCtrl
 * @description
 * # PersonsCtrl
 * Controller of the webDevTestApp
 */
angular.module('webDevTestApp')
  .controller('PersonsCtrl', function ($scope, $http, Global) {  	

    // Get dataset
    Global.getPersons().then(function(persons){
        $scope.persons = persons;
        $scope.updateMap(0);
        console.log($scope.persons);
    });      

    // Avarage balance of visible items
    $scope.getAverageBalance = function()
    {
    	var length = $scope.filteredPersons.length;
    	var total = 0;

        $scope.filteredPersons.forEach( function (item)
    	{
          if (item['balance'] != undefined) {
            var balance = parseFloat(item['balance'].replace('$', '').replace(',', ''));
            total += balance;
          }		        		
		});    	

		return parseFloat(total / length).toFixed(2);
    }

    // Avarage age of visible items
    $scope.getAverageAge = function()
    {
    	var length = $scope.filteredPersons.length;
    	var total = 0;

    	$scope.filteredPersons.forEach( function (item)
		  {
        if (item['age'] != undefined) total += item['age'];    		
		  });    	

		return parseFloat(total / length).toFixed(2);
    }
    

    // Google Map
    $scope.updateMap = function(index)
    {
        console.log(index);
        var latitude = $scope.persons[index]['latitude'];
        var longitude = $scope.persons[index]['longitude'];

        console.log(latitude);
        console.log(longitude);
        
        $scope.map = { center: { latitude: latitude, longitude: longitude }, zoom: 8 };
        $scope.marker = { 
          id: 'marker',     
          coords: {
            latitude: latitude,
            longitude: longitude
          }
        }        
    }

  });
