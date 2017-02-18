angular.module('search.services', [])

.factory('Search', function ($http) {

  var search = function(term) {
    console.log("term to send", term)
    return $http({
      method: 'POST',
      url: '/search',
      data: term
    })
    .then(function (resp) {
      return resp;
    });
  };

  return {
    search: search,
  };
})
