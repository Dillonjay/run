angular.module('services', [])

.factory('Routes', function ($http) {

  var goHome = function () {
    return $http({
      method: 'GET',
      url: '/landing'
    })
  };

  var playGame = function () {
    return $http({
      method: 'GET',
      url: '/game',
    });
  };

  return {
    goHome : goHome,
    playGame : playGame
  };
  })

