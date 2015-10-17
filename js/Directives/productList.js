app.directive('productList', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/productList.html',
    scope: {
      filterOptions: '=',
      products: '='
    }, controller: function($scope, ConversionService) {
      $scope.categoryFilter = [];
      $scope.conversionRate = ConversionService.getActiveRate();
    }
  };
});
