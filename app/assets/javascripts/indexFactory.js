var app = angular.module('acterra');

app.factory('indexFactory', ['$http', function($http){


	var factory = {};

	factory.getOrganizations =  function(callback){
		$http.get('/organizations.json').then(function(data){
			callback(data.data);
		})
	};
	factory.getCounties = function(callback){
		$http.get('/counties.json').then(function(data){
			callback(data.data);
		})
	}

	factory.getAllAwards = function(callback){
		$http.get('/awards.json').then(function(data){
			callback(data.data);
		})
	}



	return factory;
}])

app.factory('orgFactory', ['$http', function($http){
	var factory = {};

	factory.getOrg = function(id, callback){
		$http.get('/organizations/'+id+'.json').then(function(data){
			console.log("WE ARE HERE")
			callback(data.data)
		})
	};
	factory.getCounty = function(id, callback){
		$http.get('/counties/'+id+'.json').then(function(data){
			callback(data.data)
		})
	};

	factory.getAward = function(id, callback){
		$http.get('/awards/'+id+'.json').then(function(data){
			callback(data.data)
		})
	};

	return factory;
}])




