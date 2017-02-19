angular.module('search.data', [])

.controller('InputDropdownController', [
      '$scope',
      '$q',
      'Search',
      function($scope, $q, Search) {
        var self = this;
      
        self.city = null;
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
             Search.search(self.city)
             .then(function(data) {
             	console.log('success', data)
             })
             .catch(function(err){
             	console.log('ero', err)
             })
          }
        };

      }
    ]);