angular.module('search.data', [])



.controller('InputDropdownController', [
      '$scope',
      '$q',
      'Search',
      function($scope, $q, Search) {
        var self = this;
      
        self.countryObject = null;

        // Pass strings to the dropdown for simple usage
        self.defaultDropdownStrings = [
          'Austin,TX',
          'Dallas,TX',
          'Missoula,MT',
          'Portland,OR'
        ];

        // Use objects in the dropdown list if more data than just a string is needed.
        // Every object needs to have a property 'readableName', this is what will be displayed in the dropdown.
        self.defaultDropdownObjects = [
	        {
	          readableName: 'Austin,TX'
	        }, 
	        {
	          readableName: 'Dallas,TX'
	       
	        }, 
	        {
	          readableName: 'Missoula,MT'
	  
	        }, 
	        {
	          readableName: 'Portland,OR'
	        }
	    ];


        self.filterStringList = function(userInput) {
          var filter = $q.defer();
          var normalisedInput = userInput.toLowerCase();

          var filteredArray = self.defaultDropdownStrings.filter(function(city) {
            return city.toLowerCase().indexOf(normalisedInput) === 0;
          });

          filter.resolve(filteredArray);
          return filter.promise;
        };


        self.submitCity = function() {
          if ($scope.demoFormObjects.$valid) {
             Search.search(self.countryObject)
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