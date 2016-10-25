angular.module('run', [
  'game',
  'landing',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/game', {
      templateUrl: 'app/game/game.html',
      controller: 'GameController'
    })
    .when('/landing', {
      templateUrl: 'app/landing/landing.html',
      controller: 'LandingController'
    })
    .otherwise({
      redirectTo: '/'
    });
})

