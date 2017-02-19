angular.module('search.data', [])

.controller('InputDropdownController', [
    '$scope',
    '$q',
    'Search',
    function($scope, $q, Search) {
        var self = this;
        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 600,
    			width:  1300,
    			margin: {"left":220, "bottom":150},
    			groupSpacing: 0.3,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Reviews/Raiting',
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                },
                callback: function(chart) {
            		chart.multibar.dispatch.on('elementClick', function(e){
            			$scope.city.label = e.data.label
                		Search.getShopData($scope.city)
                		.then(function(data) {
                			$scope.coffeeShop = data.data.businesses[0];
                		})
                		.catch(function(err) {
                			console.log(err)
                		})

            		});
        		}
            }
        };
        $scope.city = null;
        $scope.coffeeShop = null;
        // Pass strings to the dropdown for simple usage
        self.defaultDropdownStrings = [
        	'Austin,TX',
        	'Dallas,TX',
        	'Missoula,MT',
        	'Portland,OR'
        ];
        // Must have property readableName to be desplayed properly.
        self.defaultDropdownObjects = [
	        {
	          	readableName: 'Austin, TX'
	        }, 
	        {
	          	readableName: 'Dallas, TX'	       
	        }, 
	        {
	          	readableName: 'Missoula, MT'	  
	        }, 
	        {
	          	readableName: 'Portland, OR'
	        },
	        {
	        	readableName: 'Oklahoma City, OK'
	        }
	    ];


        self.filterCities = function(userInput) {
        	var filter = $q.defer();
        	var input = userInput.toLowerCase();

          	var filteredArray = self.defaultDropdownObjects.filter(function(city) {
            var match = city.readableName.toLowerCase().indexOf(input) === 0;
            return match;
         	});
          filter.resolve(filteredArray);
          return filter.promise;
        };

        self.submitCity = function() {
          if ($scope.formObjects.$valid) {
             Search.search($scope.city)
             .then(function(data) {
             	// Clear coffee shop data if displayed
             	$scope.coffeeShop = null;
             	console.log(data)
             	var reviews = data.data.businesses.map(function(shop){
             		return { 
             			label: shop.name,
             			value: shop.review_count
             		}
             	})
             	var ratings = data.data.businesses.map(function(shop){
             		return { 
             			label: shop.name,
             			value: shop.rating
             		}
             	})
             	$scope.data = [
            		{
                		"key": "Number Of Reviews",
                		"color": "#d62728",
                		"values": reviews 
            		},
            		{
                		"key": "Rating",
                		"color": "#1f77b4",
                		"values": ratings
            		}
        		]
             })
             .catch(function(err){
             	console.log('err', err)
             })
          }
        };

	}
]);