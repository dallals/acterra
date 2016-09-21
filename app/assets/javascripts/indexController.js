var app = angular.module('acterra');

app.controller('indexController', ["$scope",'indexFactory', function($scope, indexFactory){
	indexFactory.getOrganizations(function(data){

		$scope.organizations = data;

		function unique(arr){
			var result = [];
			$.each(arr, function(i, e){
				if($.inArray(e, result) == -1) result.push(e);
			});
			return result;
		}

		var counties = function(data){
			var newArr=[];
			$.each(data, function(i, e){
				newArr.push(e.county_name);
			})
			return newArr;
		}

		$scope.counties = unique(counties(data));

		//filtering

		$scope.selected = [];
		$scope.places = []
	});
}]);