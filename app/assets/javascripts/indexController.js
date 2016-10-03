var app = angular.module('acterra');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Controller
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.controller('indexController', ["$scope",'indexFactory', function($scope, indexFactory){


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
		console.log($scope.organizations);

		//Helper Method
		function unique(arr){
			var result = [];
			$.each(arr, function(i, e){
				if($.inArray(e, result) == -1) result.push(e);
			});
			return result;
		}

		$scope.filter = {}

		//Unique Organization Types
		var organizationType = function(data){
			var organizationTypeArr = [];
			$.each(data, function(i, e){
				organizationTypeArr.push(e.organization.organization_type);
			});
			return organizationTypeArr;
		}
		$scope.organizationTypes = unique(organizationType(data).sort());

		//Unique  Award Years
		var awardYear = function(data){
			var awardYearArr = [];
			$.each(data, function(i, e){
				awardYearArr.push(e.name);
			});
			return awardYearArr;
		}
		$scope.awardYears = unique(awardYear(data).sort());
		console.log($scope.awardYears);
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
	                    this.mapZoom(0.25,340,-4500);
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
	        if ($.inArray(org.organization.county.name, $scope.countyIncluded) < 0)
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
	        	console.log($scope.countyIncluded);
				return;
			}
		}
    }

    $scope.awardFilter = function(org){
    	if ($scope.awardIncluded.length > 0){
    		if ($.inArray(org.award.name, $scope.awardIncluded) < 0)
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
		        	console.log($scope.countyIncluded);
					return;
				}
			}

    }

    $scope.organizationTypeFilter = function(org) {
    	if ($scope.organizationTypeIncluded.length > 0){
    		if ($.inArray(org.organization.organization_type, $scope.organizationTypeIncluded) < 0)
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


    // Sorting
    $scope.propertyName = 'org_name';
    $scope.reverse = false;
    $scope.sortBy = function(propertyName) {
	    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	    $scope.propertyName = propertyName;
  	};


}]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                           Organization Controller                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.controller('orgController', ["$scope",'$routeParams', 'orgFactory', function($scope, $routeParams, orgFactory){
	var id = $routeParams.id;
	orgFactory.getOrg(id, function(data){
		$scope.org = data[0];
	});
}]);