angular.module('search', [
  'search.services',
  'search.about',
  'search.data',
  'inputDropdown',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider 
    .when('/', {
      templateUrl: 'app/about/about.html',
      controller: 'AboutController'
    })
    .when('/data', {
      templateUrl: 'app/data/data.html',
      controller: 'InputDropdownController'
    })
    .otherwise({
      redirectTo: '/'
    });
})
