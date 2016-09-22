var app = angular.module('acterra');

app.factory('indexFactory', ['$http', function($http){


	var factory = {};

	factory.getOrganizations =  function(callback, callback2){
		$http.get('/awards.json').then(function(data){
			console.log(data, "hello")
			callback(data.data.awards);
			callback2(data.data.county)
		})
	};
	factory.getCounties = function(callback){
		$http.get('/counties.json').then(function(data){
			callback(data.data);
		})
	}



	return factory;
}])

app.factory('orgFactory', ['$http', function($http){
	var factory = {};

	factory.getOrg = function(id, callback){
		$http.get('/organizations/'+id+'.json').then(function(data){
			console.log(data, "blash")
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