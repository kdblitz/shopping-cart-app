app.directive('filterBar', function() {
  return {
    restrict: 'E',
    replace:true,
    templateUrl: 'js/Directives/filterBar.html',
    scope: {
      filterOptions:'=',
      products:'='
    }, controller: function($scope, ProductFilterService) {
      $scope.sortOptions = ProductFilterService.sortOptions;
      $scope.$watch(function() {
        return $scope.products
      }, function(products) {
        console.log(products);
        $scope.categories = ProductFilterService.getCategories(products);
      });

      $scope.toggleCategoryFilter = function(category) {
        ProductFilterService.toggleCategoryFilter($scope.filterOptions.categoryFilter, category);
      };
    }, link: function(scope) {
      scope.updateSortOption = function(sortOption) {
        scope.filterOptions.currentSortOption = sortOption;
      }
      scope.toggleSpecialOffers = function() {
        scope.filterOptions.showSpecialOffers = !scope.filterOptions.showSpecialOffers;
      }
    }
  };
});
