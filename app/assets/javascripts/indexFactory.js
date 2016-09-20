var app = angular.module('acterra');

app.factory('indexFactory', ['$http', function($http){


	var factory = {};

	factory.getOrganizations =  function(callback){
		console.log("hello again");
		$http.get('/organizations.json').then(function(data){
			console.log(data.data, "hello")
			callback(data.data);
		})
	};



	return factory;
}])