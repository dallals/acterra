var app = angular.module('acterra');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Controller
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.controller('indexController', ["$scope",'indexFactory', function($scope, indexFactory){
	// var organizations;
	$scope.selectedCounty = ""
	// List of selected counties by checkbox
	$scope.countyIncluded = [];
	// Grabs all existing organizations/awards in database
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
		$scope.awards = unique(awards(data));
		$scope.filter = {}
		$scope.sortType     = 'name'; // set the default sort type
 		$scope.sortReverse  = false;  // set the default sort order
  		$scope.searchFish   = '';     // set the default search/filter term
	});

	// Grabs all existing counties in database
	indexFactory.getCounties(function(data){
		$scope.counties = data
		console.log(data)
	});

	// Initializes Highcharts county map
	$(function () {
	    // Prepare demo data


	    // Initiate the chart
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
	            text : 'Organizations'
	            
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

}]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Organization Controller
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.controller('orgController', ["$scope",'$routeParams', 'orgFactory', function($scope, $routeParams, orgFactory){
	var id = $routeParams.id;
	console.log(id)
	orgFactory.getOrg(id, function(data){
		$scope.org = data;
		orgFactory.getCounty($scope.org.county_id, function(data2){
			$scope.county = data2;
		})
	});

}]);
