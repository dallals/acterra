var app = angular.module('acterra');

app.factory('indexFactory', ['$http', function($http){


	var factory = {};
	var page = 0;

	factory.getOrganizations =  function(callback){
		console.log("hello again");
		$http.get('/organizations.json').then(function(data){
			callback(data.data);
		})
	};



    //   $http.get("/organizations.json",  
    //             { "params": { "keywords": searchTerm, "page": page } }
    //   ).success(
    //     function(data,status,headers,config) { 
    //       $scope.organizations = data;
    //       $scope.loading = false;
    //   }).error(
    //     function(data,status,headers,config) {
    //       $scope.loading = false;
    //       alert("There was a problem: " + status);
    //     });
    // }


	return factory;
}])