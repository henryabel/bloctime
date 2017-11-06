(function() {
  function HomeCtrl($interval) {
    vm = this;
    vm.start = "Start";
    vm.reset = "Reset";
    vm.startOrResume = function() {
      console.count();
    };
    //$interval(console.count, 1000);

  }
  angular.module('blocTime').controller('HomeCtrl', ['$interval', HomeCtrl]);
})();
