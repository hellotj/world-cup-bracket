var WorldCupBracket = angular.module('WorldCupBracket', ['ngResource']).config(
    ['$httpProvider', function($httpProvider) {
    var authToken = angular.element("meta[name=\"csrf-token\"]").attr("content");
    var defaults = $httpProvider.defaults.headers;

    defaults.common["X-CSRF-TOKEN"] = authToken;
    defaults.patch = defaults.patch || {};
    defaults.patch['Content-Type'] = 'application/json';
    defaults.common['Accept'] = 'application/json';
}]);

WorldCupBracket.factory('Bracket', ['$resource', function($resource) {
  return $resource('/your_model/:id',
    {id: '@id'},
    {update: { method: 'PATCH'}});
}])

worldCupBracket.controller('BracketCtrl', [‘YourModel', '$scope', function(YourModel, $scope) {
  $scope.yourModels= [];

  YourModel.query(function(yourModels) {
    $scope.yourModels = yourModels;
  });
}])

