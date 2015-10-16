app.directive('filterBar', function() {
  return {
    restrict: 'E',
    replace:true,
    templateUrl: 'js/Directives/filterBar.html',
    scope: {
      filterOptions:'=',
      products:'='
    }
  };
});
