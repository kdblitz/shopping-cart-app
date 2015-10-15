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
