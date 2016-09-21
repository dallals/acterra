var app = angular.module('acterra');

app.factory('indexFactory', ['$http', function($http){


	var factory = {};

	factory.getOrganizations =  function(callback){
		$http.get('/organizations.json').then(function(data){
			callback(data.data);
		})
	};



	return factory;
}])