angular.module('search.services', [])

.factory('Search', function ($http) {

  var search = function () {
    return $http({
      method: 'GET',
      url: '/search'
    })
    .then(function (resp) {
      return resp;
    });
  };

  return {
    search: search,
  };
})
