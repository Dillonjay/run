angular.module('Run', [
  'Run.landing',
  'Run.game',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider 
    .when('/', {
      templateUrl: 'app/landing/landing.html'
    })
    .when('/game', {
      templateUrl: 'app/game/game.html',
      controller: 'GameController'
    })
    .otherwise({
      redirectTo: '/'
    });
})
