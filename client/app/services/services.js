angular.module('search.services', [])

.factory('Search', function ($http) {
  // Hit server with selected city.
  var search = function(term) {
    return $http({
      method: 'POST',
      url: '/search',
      data: term
    })
    .then(function (resp) {
      return resp;
    });
  };

  // Hit server with selected shop.
  var getShopData = function(info) {
    return $http({
      method: 'POST',
      url: '/getShop',
      data: info
    })
    .then(function(resp) {
      return resp
    })
  };

  return {
    search: search,
    getShopData : getShopData
  };

})
