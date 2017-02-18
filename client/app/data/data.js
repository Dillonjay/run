angular.module('search.data', [])

.controller('DataController', function($scope, Search) {
	$scope.input = {};
	$scope.search = function () {
    Search.search($scope.input)
      .then(function (res) {
       	console.log('stuff is happening',res)
      })
      .catch(function (error) {
        console.error(error);
      });
  };
})