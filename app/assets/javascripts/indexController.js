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
<<<<<<< HEAD

=======
		$scope.filter = {}
	});

	// Grabs all existing counties in database
	indexFactory.getCounties(function(data){
		$scope.counties = data
		console.log(data)
	});
>>>>>>> 1c913bfdd04f34f9ffb42f0ff53ef773bca4bcec

	// Initializes Highcharts county map
	$(function () {
	    // Prepare demo data
	    var data = [
	        {
	            "hc-key": "us-ca-083",
	            "value": 0
	        },
	        {
	            "hc-key": "us-ca-111",
	            "value": 1
	        },
	        {
	            "hc-key": "us-ca-071",
	            "value": 2
	        },
	        {
	            "hc-key": "us-ca-115",
	            "value": 3
	        },
	        {
	            "hc-key": "us-ca-101",
	            "value": 4
	        },
	        {
	            "hc-key": "us-ca-031",
	            "value": 5
	        },
	        {
	            "hc-key": "us-ca-053",
	            "value": 6
	        },
	        {
	            "hc-key": "us-ca-057",
	            "value": 7
	        },
	        {
	            "hc-key": "us-ca-059",
	            "value": 8
	        },
	        {
	            "hc-key": "us-ca-065",
	            "value": 9
	        },
	        {
	            "hc-key": "us-ca-073",
	            "value": 10
	        },
	        {
	            "hc-key": "us-ca-041",
	            "value": 11
	        },
	        {
	            "hc-key": "us-ca-075",
	            "value": 12
	        },
	        {
	            "hc-key": "us-ca-095",
	            "value": 13
	        },
	        {
	            "hc-key": "us-ca-097",
	            "value": 14
	        },
	        {
	            "hc-key": "us-ca-055",
	            "value": 15
	        },
	        {
	            "hc-key": "us-ca-013",
	            "value": 16
	        },
	        {
	            "hc-key": "us-ca-009",
	            "value": 17
	        },
	        {
	            "hc-key": "us-ca-077",
	            "value": 18
	        },
	        {
	            "hc-key": "us-ca-035",
	            "value": 19
	        },
	        {
	            "hc-key": "us-ca-091",
	            "value": 20
	        },
	        {
	            "hc-key": "us-ca-067",
	            "value": 21
	        },
	        {
	            "hc-key": "us-ca-017",
	            "value": 22
	        },
	        {
	            "hc-key": "us-ca-099",
	            "value": 23
	        },
	        {
	            "hc-key": "us-ca-061",
	            "value": 24
	        },
	        {
	            "hc-key": "us-ca-043",
	            "value": 25
	        },
	        {
	            "hc-key": "us-ca-063",
	            "value": 26
	        },
	        {
	            "hc-key": "us-ca-049",
	            "value": 27
	        },
	        {
	            "hc-key": "us-ca-089",
	            "value": 28
	        },
	        {
	            "hc-key": "us-ca-109",
	            "value": 29
	        },
	        {
	            "hc-key": "us-ca-039",
	            "value": 30
	        },
	        {
	            "hc-key": "us-ca-003",
	            "value": 31
	        },
	        {
	            "hc-key": "us-ca-069",
	            "value": 32
	        },
	        {
	            "hc-key": "us-ca-047",
	            "value": 33
	        },
	        {
	            "hc-key": "us-ca-079",
	            "value": 34
	        },
	        {
	            "hc-key": "us-ca-011",
	            "value": 35
	        },
	        {
	            "hc-key": "us-ca-007",
	            "value": 36
	        },
	        {
	            "hc-key": "us-ca-081",
	            "value": 37
	        },
	        {
	            "hc-key": "us-ca-087",
	            "value": 38
	        },
	        {
	            "hc-key": "us-ca-085",
	            "value": 39
	        },
	        {
	            "hc-key": "us-ca-029",
	            "value": 40
	        },
	        {
	            "hc-key": "us-ca-005",
	            "value": 41
	        },
	        {
	            "hc-key": "us-ca-113",
	            "value": 42
	        },
	        {
	            "hc-key": "us-ca-033",
	            "value": 43
	        },
	        {
	            "hc-key": "us-ca-045",
	            "value": 44
	        },
	        {
	            "hc-key": "us-ca-103",
	            "value": 45
	        },
	        {
	            "hc-key": "us-ca-023",
	            "value": 46
	        },
	        {
	            "hc-key": "us-ca-093",
	            "value": 47
	        },
	        {
	            "hc-key": "us-ca-027",
	            "value": 48
	        },
	        {
	            "hc-key": "us-ca-001",
	            "value": 49
	        },
	        {
	            "hc-key": "us-ca-037",
	            "value": 50
	        },
	        {
	            "hc-key": "us-ca-025",
	            "value": 51
	        },
	        {
	            "hc-key": "us-ca-021",
	            "value": 52
	        },
	        {
	            "hc-key": "us-ca-107",
	            "value": 53
	        },
	        {
	            "hc-key": "us-ca-019",
	            "value": 54
	        },
	        {
	            "hc-key": "us-ca-015",
	            "value": 55
	        },
	        {
	            "hc-key": "us-ca-105",
	            "value": 56
	        },
	        {
	            "hc-key": "us-ca-051",
	            "value": 57
	        }
	    ];

	    // Initiate the chart
	    $('#container').highcharts('Map', {

	        chart: {
							panning: false,
	            events: {
	                load: function () {
	                    this.mapZoom(0.16,500,-5000);
	                }
	            }
	        },

<<<<<<< HEAD
=======
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

	        series : [{
	            data : data,
	            mapData: Highcharts.maps['countries/us/us-ca-all'],
	            joinBy: 'hc-key',
	            name: 'Random data',
	            states: {
	                hover: {
	                    color: '#BADA55'
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
											 // Passes county name to filter function
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
	            }
	        }]
	    });

>>>>>>> 1c913bfdd04f34f9ffb42f0ff53ef773bca4bcec
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
