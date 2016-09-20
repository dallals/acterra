var app = angular.module('acterra');

app.controller('indexController', ["$scope", 'indexFactory', function($scope, indexFactory){
	console.log("indexController loaded");
	$scope.test = "hello";

	indexFactory.getOrganizations(function(data){
		$scope.organizations = data;
		console.log($scope.organizations);
	})
}]);