var app = angular.module('acterra');

<<<<<<< HEAD
app.controller('indexController', ["$scope", 'indexFactory', function($scope, indexFactory){
	console.log("indexController loaded");

=======
app.controller('indexController', ["$scope",'indexFactory', function($scope, indexFactory){
	// var organizations;
>>>>>>> 52ef24853070c6ac54ec86e2c090515498397f53
	indexFactory.getOrganizations(function(data){
		$scope.organizations = data;
		console.log($scope.organizations);

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

		// $scope.counties = function(data){
		// 	var newArr = []
		// 	for(var x in data){
		// 		newArr.push(data[x].org_name);
		// 	}
		// 	console.log(newArr);
		// 	return newArr.unique();
		// };



	});
}]);