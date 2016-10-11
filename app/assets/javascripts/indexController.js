var app = angular.module('acterra');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Controller
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.controller('indexController', ["$scope",'indexFactory', function($scope, indexFactory){
	// $scope.selectedCounty = ""

	// List of selected counties by checkbox
	$scope.countyIncluded = [];

	// $scope.selectedAward = ""
	// List of selected awards by checkbox
	$scope.awardIncluded = [];

	// $scope.selectedOrganizationType = ""

	$scope.organizationTypeIncluded = [];

	$scope.yearIncluded = [];

	// Grabs all existing organizations/awards in database
	indexFactory.getOrganizations(function(data){
		$scope.organizations = data;

		//Helper Method
		function unique(arr){
			var result = [];
			$.each(arr, function(i, e){
				if($.inArray(e, result) == -1) result.push(e);
			});
			return result;
		}

		$scope.filter = {}

		// //Unique Organization Types
		// var organizationType = function(data){
		// 	var organizationTypeArr = [];
		// 	$.each(data, function(i, e){
		// 		organizationTypeArr.push(e.organization.organization_type);
		// 	});
		// 	return organizationTypeArr;
		// }
		// $scope.organizationTypes = unique(organizationType(data).sort());

		//Unique  Award Years
		var awardYear = function(data){
			var awardYearArr = [];
			$.each(data, function(i, e){
				awardYearArr.push(e.name);
			});
			return awardYearArr;
		}
		$scope.awardYears = unique(awardYear(data).sort());
		// console.log($scope.awardYears);
	});

	// Grabs all existing counties in database
	indexFactory.getCounties(function(data){
		$scope.counties = data;
	});

	// Grabs all existing counties in database
	indexFactory.getOrgTypes(function(data){
		$scope.organizationTypes = data;
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
	                    this.mapZoom(0.53,310,-4950);
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
	        	color: "#E2E2E2",
	            data : carte,
	            mapData: Highcharts.maps['countries/us/us-ca-all'],
	            joinBy: 'hc-key',
	            name: 'County',
	            allowPointSelect: true,
	            cursor: 'pointer',
	            states: {
	                hover: {
	                    color: '#8DA335',
	                    formatter: function(){
	                    	console.log('test');
	                    }
	                },
	                select: {
                        color: '#d6bb8b',
                        borderColor: 'white',
                        dashStyle: 'shortdot'
                    }
	            },
	            dataLabels: {
	                enabled: true,
					color: '#3A7998',
	                format: '{point.name}',
	                style: {
	                	fontFamily: 'sans-serif',
	                	textShadow: 'false',
	                	fontSize: '15px'
	                }
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
	    },
		function(chartObj){
				console.log(chartObj);
			}
	    );
	});

	//County filter
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
				// $scope.selectedCounty = "";
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

    // Award filter
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
				// $scope.selectedAward = "";
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

    // Organization type filter
    $scope.organizationTypeFilter = function(org) {
    	if ($scope.organizationTypeIncluded.length > 0){
    		if ($.inArray(org.organization.organization_type.name, $scope.organizationTypeIncluded) < 0)
    			return;
    	}
    	return org;
    }


    $scope.includeOrganizationType = function(org_type) {
		for(var x in $scope.organizationTypes){
			if($scope.organizationTypes[x].name == org_type){
				// $scope.selectedOrganizationType = ""
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


    // Year filter
    $scope.yearFilter = function(org) {
    	if ($scope.yearIncluded.length > 0){
    		if ($.inArray(org.name, $scope.yearIncluded) < 0)
    			return;
    	}
    	return org;
    }


    $scope.includeYear = function(year) {
		for(var x in $scope.awardYears){
			if($scope.awardYears[x] == year){
				// $scope.selectedOrganizationType = ""
	        	var i = $.inArray(year, $scope.yearIncluded);
		        if (i > -1) {
		            $scope.yearIncluded.splice(i, 1);
		        } else {
		            $scope.yearIncluded.push(year);
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


}])


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                           Organization Controller                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.controller('orgController', ["$scope",'$routeParams', 'orgFactory','$sce', '$window', function($scope, $routeParams, orgFactory, $sce, $window){
	var id = $routeParams.id;
	orgFactory.getOrg(id, function(data){
		$scope.org = data[0];
		$scope.video = $sce.trustAsResourceUrl($scope.org.video.replace("watch?v=", "embed/"));
	});

	$scope.openLink = function(website){
		if(website.includes('http://') || website.includes('https://')){
			$window.open(website, '_blank');
		}else{
			$window.open('http://'+website);
		}
		
	}
}]);

// app.controller('orgController', ["$scope",'$routeParams', 'orgFactory', function($scope, $routeParams, orgFactory){
// 	var id = $routeParams.id;
// 	console.log(id)
// 	orgFactory.getOrg(id, function(data){
// 		$scope.org = data.organization;
// 		$scope.image = data.image;
// 		$scope.awards = data.awards;
// 		$scope.county = data.county;
// 		$scope.award_years = data.award_years;
// 		console.log($scope.org, "org")
// 		console.log($scope.image, "Image")
// 		console.log($scope.county, "county")
// 		console.log($scope.award_years, "award_years")

// 	});

// }]);

