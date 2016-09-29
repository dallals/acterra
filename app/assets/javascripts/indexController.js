var app = angular.module('acterra');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Controller
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.controller('indexController', ["$scope",'indexFactory', function($scope, indexFactory){
	// var organizations;
	$scope.selectedCounty = ""
	// List of selected counties by checkbox
	$scope.countyIncluded = [];

	$scope.selectedAward = ""
	// List of selected awards by checkbox
	$scope.awardIncluded = [];

	$scope.selectedOrganizationType = ""

	$scope.organizationTypeIncluded = []
	// Grabs all existing organizations/awards in database
	indexFactory.getOrganizations(function(data){
		$scope.organizations = data;

		function unique(arr){
			var result = [];
			$.each(arr, function(i, e){
				if($.inArray(e, result) == -1) result.push(e);
			});
			return result;
		}

		$scope.filter = {}

		var organizationType = function(data){
			var organizationTypeArr = [];
			$.each(data, function(i, e){
				organizationTypeArr.push(e.org_type);
			});
			return organizationTypeArr;
		}

		// $scope.awards = unique(awards(data));
		//$scope.filter = {}
		$scope.sortType     = 'name'; // set the default sort type
 		$scope.sortReverse  = false;  // set the default sort order
  		$scope.searchFish   = '';     // set the default search/filter term


		$scope.organizationTypes = unique(organizationType(data));
		console.log($scope.organizationTypes);
	});

	// Grabs all existing counties in database
	indexFactory.getCounties(function(data){
		$scope.counties = data;
	});
	// Grabs all existing awards in database
	indexFactory.getAllAwards(function(data){
		$scope.awards = data;
	});

	// Initializes Highcharts county map
	$(function () {

	    // Initiate the chart
		//var previousPoint = null;
	    $('#container').highcharts('Map', {

	        chart: {
				panning: false,
	            events: {
	                load: function () {
	                    this.mapZoom(0.20,100,-4700);
	                }
	            }
	        },

	        title : {
	            text : 'Organizations By County'
	        },

	        subtitle : {
	            text : 'Bay Area'
	        },

	       	mapNavigation: {
	            enabled: false,
	            buttonOptions: {
	                verticalAlign: 'bottom'
	            }
	        },

	        legend:{
	        	enabled: false
	        },

	        credits: {
			    enabled: false
			},

	        series : [{
	        	color: "#d3d3d3",
	            data : carte,
	            mapData: Highcharts.maps['countries/us/us-ca-all'],
	            joinBy: 'hc-key',
	            name: 'County',
	            allowPointSelect: true,
	            cursor: 'pointer',
	            states: {
	                hover: {
	                    color: '#8bd6bb'
	                },
	                select: {
                        color: '#d6bb8b',
                        borderColor: 'white',
                        dashStyle: 'shortdot'
                    }
	            },
	            dataLabels: {
	                enabled: true,
					color: '#FFFFFF',
	                format: '{point.name}'
	            },

				// Adds county to filter list on click
	            point: {
	                events: {
	                  click: function(){
						 //Passes county name to filter function
						 $scope.include(this.name)
						 $scope.$apply()
						 // Programmatically toggles corresponding checkbox to stay consistent
						 if ($("span:contains('"+this.name+"')").siblings().prop("checked")==false){
							 $("span:contains('"+this.name+"')").siblings().prop("checked", true)
						 }
						 else{
							 $("span:contains('"+this.name+"')").siblings().prop("checked", false)
						 }
	                  }
	                }
	            },

	           	tooltip:{
	              headerFormat: '',
	              pointFormat: '{point.name}'
              	},
	        }]
	    });
	});

	// Filters out non selected counties
	$scope.countyFilter = function(org) {
		// Filters nothing if no counties selected
    if ($scope.countyIncluded.length > 0) {
        if ($.inArray(org.county_name, $scope.countyIncluded) < 0)
            return;
    }
    return org;
  }
	// Adds county to the filter array
	$scope.include = function(county) {
		for(var x in $scope.counties){
			if($scope.counties[x].name == county){
				$scope.selectedCounty = ""
	        var i = $.inArray(county, $scope.countyIncluded);
	        if (i > -1) {
	            $scope.countyIncluded.splice(i, 1);
	        } else {
	            $scope.countyIncluded.push(county);
	        }
				return;
			}
		}
    }

    $scope.awardFilter = function(org){
    	if ($scope.awardIncluded.length > 0){
    		if ($.inArray(org.award_name, $scope.awardIncluded) < 0)
    		return;
    	}
    	return org;
    }

    $scope.includeAward = function(award) {
			for(var x in $scope.awards){
				if($scope.awards[x].name == award){
					$scope.selectedAward = ""
		        var i = $.inArray(award, $scope.awardIncluded);
		        if (i > -1) {
		            $scope.awardIncluded.splice(i, 1);
		        } else {
		            $scope.awardIncluded.push(award);
		        }
						return;
				}
			}

    }

    $scope.organizationTypeFilter = function(org) {
    	if ($scope.organizationTypeIncluded.length > 0){
    		if ($.inArray(org.org_type, $scope.organizationTypeIncluded) < 0)
    			return;
    	}
    	return org;
    }


    $scope.includeOrganizationType = function(org_type) {
		for(var x in $scope.organizationTypes){
			if($scope.organizationTypes[x] == org_type){
				$scope.selectedOrganizationType = ""
	        var i = $.inArray(org_type, $scope.organizationTypeIncluded);
	        if (i > -1) {
	            $scope.organizationTypeIncluded.splice(i, 1);
	        } else {
	            $scope.organizationTypeIncluded.push(org_type);
	        }
				return;
			}
		}
    }


}]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                           Organization Controller                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.controller('orgController', ["$scope",'$routeParams', 'orgFactory', function($scope, $routeParams, orgFactory){
	var id = $routeParams.id;
	console.log(id)
	orgFactory.getOrg(id, function(data){
		$scope.org = data.organization;
		$scope.image = data.image;
		$scope.awards = data.awards;
		$scope.county = data.county;
		$scope.award_years = data.award_years;
		console.log($scope.org, "org")
		console.log($scope.image, "IMage")
		console.log($scope.county, "county")
		console.log($scope.award_years, "award_years")

		// orgFactory.getCounty($scope.org.county_id, function(data2){
		// 	console.log("hello2")
		// 	$scope.county = data2;
		// })
	});

}]);