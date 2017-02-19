angular.module('search', [
  'search.services',
  'search.data',
  'inputDropdown',
  'nvd3',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider 
    .when('/', {
      templateUrl: 'app/about/about.html'
    })
    .when('/data', {
      templateUrl: 'app/data/data.html',
      controller: 'InputDropdownController'
    })
    .otherwise({
      redirectTo: '/'
    });
})
