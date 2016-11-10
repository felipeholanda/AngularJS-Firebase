(function(){
  'use strict';

  angular.module('insta').controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', '$firebaseArray'];

  function HomeCtrl($scope, $firebaseArray) {
    $scope.messages = [];

    var ref = new Firebase('https://teste-dcd68.firebaseio.com/messages');

    function activate() {
      $scope.messages = $firebaseArray(ref);
    }

    activate();
  };
})();
