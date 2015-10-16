'use strict';

app.directive('shoppingCartApp', function() {
  return {
    restrict: 'E',
    controller: function($scope, ProductService, ProductFilterService) {
      $scope.products = ProductService.getProducts();
      $scope.filterOptions = {
        showSpecialOffers: true,
        currentSortOption: ProductFilterService.sortOptions[0],
        categoryFilter: []
      };
      $scope.tracks = null;
      // ConversionService.getConversionRates('USD','PHP').then(function(multiplier) {
      //   $scope.rate = multiplier;
      // })
    },
    templateUrl: 'js/Directives/shoppingCartApp.html'
  };
});
