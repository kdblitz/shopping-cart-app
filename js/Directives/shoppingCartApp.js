'use strict';

app.directive('shoppingCartApp', function() {
  return {
    restrict: 'E',
    controller: function($scope, ProductService, ProductFilterService) {
      $scope.products = {
        productList: ProductService.getProducts(),
      };
      $scope.filterOptions = {
        showSpecialOffers: true,
        currentSortOption: ProductFilterService.sortOptions[0],
        categoryFilter: []
      };
      $scope.tracks = null;
    },
    templateUrl: 'js/Directives/shoppingCartApp.html'
  };
});
