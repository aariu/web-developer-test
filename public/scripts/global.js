angular.module('webDevTestApp')
	.service('Global', function($http, $location) {
    
    var apiEndpoint = 'http://0.0.0.0:8080';

    this._apiEndpoint = function() {
    	return apiEndpoint;
    }    

    this.getPersons = function(url) {  
      return $http.get(apiEndpoint + '/api/persons').then(function(response){
        return response.data;
      });
    }

    this.insertUser = function(name) {  
      var data = {'name': name};  
      return $http.post(apiEndpoint + '/api/persons/add', data).then(function(response){
        $location.path('persons');
      });
    }    

    this.getPersonById = function(id, persons) {                
        return persons[id];
    }    

  });