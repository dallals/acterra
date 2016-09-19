var app = angular.module('acterra');

app.controller('indexController', ["$scope",function($scope){
	console.log("indexController loaded");
	$scope.test = "hello";
}]);