app.directive('productList', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/productList.html',
    scope: {
      filterOptions: '=',
      products: '='
    }, controller: function($scope, ConversionService) {
      $scope.categoryFilter = [];
      ConversionService.changeRate('USD','PHP').then(function(rate) {
        $scope.conversionRate = rate;
      });
    }
  };
});
