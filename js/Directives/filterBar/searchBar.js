app.directive('searchBar', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'js/Directives/filterBar/searchBar.html',
    scope: {
      products:'='
    }, controller: function($scope,ProductFilterService, $q) {
      $scope.productQuery = '';
      $scope.categoryFilter = [];

      $scope.filterProductByQuery = function() {
        return ProductFilterService.filterProductByQuery(
          $scope.products.productList, $scope.productQuery).then(function(result) {
            $scope.products.filteredProductByQuery = result;
            updateCategories(result);
          }).then($scope.filterProductByCategory);
      };

      function updateCategories(products) {
        $scope.categories = ProductFilterService.getCategories(products);
      };

      $scope.filterProductByCategory = function() {
        return ProductFilterService.filterProductByCategory(
          $scope.products.filteredProductByQuery, $scope.categoryFilter).then(function(result) {
            $scope.products.filteredProductByCategory = result;
          });
      }

      $scope.toggleCategoryFilter = function(category) {
        ProductFilterService.toggleCategoryFilter($scope.categoryFilter, category);
        $scope.filterProductByCategory();
      };

      $scope.filterProductByQuery();
    }
  }
});
