var app = angular.module('acterra');

app.controller('indexController', ["$scope",'indexFactory', function($scope, indexFactory){
	// var organizations;

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


		var awards = function(data){
			var awardsArr=[];
			$.each(data, function(i, e){
				awardsArr.push(e.award_name);
			})
			return awardsArr;
		}

		var counties = function(data){
			var newArr=[];
			$.each(data, function(i, e){
				newArr.push(e.county_name);
			})
			return newArr;
		}

		$scope.counties = unique(counties(data));
		$scope.awards = unique(awards(data));

		$scope.filter = {}




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

app.controller('orgController', ["$scope",'$routeParams', 'orgFactory', function($scope, $routeParams, orgFactory){
	var id = $routeParams.id;
	console.log(id)
	orgFactory.getOrg(id, function(data){
		$scope.org = data;
		orgFactory.getCounty($scope.org.county_id, function(data2){
			$scope.county = data2;
		})
	})


}]);
