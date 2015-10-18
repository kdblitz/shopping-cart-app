app.directive('searchBar', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'js/Directives/filterBar/searchBar.html',
    scope: {
      filterOptions:'=',
      products:'='
    }, controller: function($scope,ProductFilterService, $q) {
      $scope.productQuery = '';
      var categoryFilter = [];

      $scope.filterProductByQuery = function() {
          return ProductFilterService.filterProductByQuery(
              $scope.products.productList, $scope.productQuery).then(function(result) {
                  $scope.products.filteredProductByQuery = result;
                  updateCategories(result);
                  return result;
              });
      };

      function updateCategories(products) {
        $scope.categories = ProductFilterService.getCategories(products);
      };

      $scope.filterProductByCategory = function() {
          return ProductFilterService.filterProductByCategory(
              $scope.products.filteredProductByQuery, categoryFilter).then(function(result) {
                  $scope.products.filteredProductByCategory = result;
              });
      }

      $scope.toggleCategoryFilter = function(category) {
        ProductFilterService.toggleCategoryFilter(categoryFilter, category);
        $scope.products.filteredProductByCategory = $scope.filterProductByCategory();
      };

      $scope.filterProductByQuery().then($scope.filterProductByCategory);
    }
  }
});
