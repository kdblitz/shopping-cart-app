app.directive('sortOptions', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'js/Directives/filterBar/sortOptions.html',
    scope: {
      currentSortOption:'=',
    }, controller: function($scope, ProductFilterService) {
      $scope.sortOptions = ProductFilterService.sortOptions;

      $scope.updateSortOption = function(sortOption) {
        $scope.currentSortOption = sortOption;
      };

    }
  }
})
