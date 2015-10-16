app.directive('searchBar', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'js/Directives/filterBar/searchBar.html',
    scope: {
      filterOptions:'=',
      products:'='
    }, controller: function($scope,ProductFilterService) {
      $scope.$watch(function() {
        return $scope.products
      }, function(products) {
        $scope.categories = ProductFilterService.getCategories(products);
      });

      $scope.toggleCategoryFilter = function(category) {
        ProductFilterService.toggleCategoryFilter($scope.categoryFilter, category);
      };
    }
  }
});
