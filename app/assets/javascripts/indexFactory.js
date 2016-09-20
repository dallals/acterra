var app = angular.module('acterra');

app.factory('indexFactory', ['$http', function($http){


	var factory = {};

	factory.getOrganizations =  function(callback){
		console.log("hello again");
		$http.get('/organizations').then(function(data){
			callback(data.data);
		})
	};



	return factory;
}])