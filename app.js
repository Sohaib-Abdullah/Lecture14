(function () {
  'use strick';

  angular.module('MsgApp', [])

  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);
    MsgController.$inject = ['$scope', 'lovesFilter'];
    function MsgController($scope, lovesFilter) {
      $scope.name="Sohaib";
      $scope.stateOfBeing="alone";

      $scope.sayMessage = function () {
        var msg = "Sohaib likes to eat healthy snacks at night!";
        return msg;
      };
      $scope.sayLovesMessage = function () {
        var msg = "Sohaib likes to eat healthy snacks at night!";
       msg = lovesFilter(msg)
        return msg;
      };

      $scope.sohaibwithriyan = function() {
        $scope.stateOfBeing = "withriyan";
      };
    }
    function LovesFilter(){
      return function(input){
        input = input || "";
        input = input.replace("likes","loves");
        return input;
      };
    }

    function TruthFilter(){
      return function(input, target, replace) {
        input = input || "";
        input = input.replace(target,replace);
        return input;
      }
    }
})();
