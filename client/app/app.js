angular.module('Run', [
  'run.game',
  'run.landing',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider 
    .when('/', {
      templateUrl: 'app/landing/landing.html',
      controller: 'LandingController'
    })
    .when('/game', {
      templateUrl: 'app/game/game.html',
      controller: 'GameController'
    })
    .otherwise({
      redirectTo: '/'
    });
})
