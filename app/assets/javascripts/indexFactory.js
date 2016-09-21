var app = angular.module('acterra');

app.factory('indexFactory', ['$http', function($http){


	var factory = {};

	factory.getOrganizations =  function(callback){
		console.log("hello again");
		$http.get('/awards.json').then(function(data){
			callback(data.data);
		})
	};



	return factory;
}])

app.factory('orgFactory', ['$http', function($http){
	var factory = {};

	factory.getOrg = function(id, callback){
		$http.get('/organizations/'+id+'.json').then(function(data){
			callback(data.data)
		})
	};
	factory.getCounty = function(id, callback){
		$http.get('/counties/'+id+'.json').then(function(data){
			callback(data.data)
		})
	};
	factory.getAward = function(id, callback){
		$http.get('/counties/'+id+'.json').then(function(data){
			callback(data.data)
		})
	};
	return factory;
}])

