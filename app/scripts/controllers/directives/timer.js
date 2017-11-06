(function() {
  function timer($interval) {
    return {
      retrict: 'E',
      scope: true,
      templateUrl: 'templates/directives/timer.html',
      link: function(scope, elements, attributes) {
        var currentTime = 100;
        scope.timerFunction = function() {
          currentTime = currentTime - 1;
          console.count();
          /*var firstDigit = Math.floor(currentTime / 60 / 10).toString();
          var secondDigit = Math.floor(currentTime / 60 % 10).toString();
          var thirdDigit = Math.floor(currentTime % 60 / 10).toString();
          var fourthDigit = Math.floor(currentTime % 60 % 10).toString();*/
          return currentTime;
          //return firstDigit + secondDigit + ":" + thirdDigit + fourthDigit;
        };
      //  $interval(scope.timerFunction, 1000);
      }
    }
  }
  angular.module('blocTime').directive('timer', ['$interval', timer]);
})();
