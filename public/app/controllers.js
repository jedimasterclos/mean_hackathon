angular.module('VerdictApp')
.controller('CoinCtrl', ['$scope', function($scope) {
  console.log('ready');
  $scope.class = '';
  var spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];

  function getSpin() {
    var spin = spinArray[Math.floor(Math.random()*spinArray.length)];
    return spin;
  }

  $scope.clickCoin = function() {
  
    setTimeout(function(){
      $scope.class = '';
      $scope.class= getSpin();
    }, 100);
  }
}]);