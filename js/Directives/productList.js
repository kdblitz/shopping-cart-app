app.directive('productList', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/productList.html',
    scope: {
      filterOptions: '=',
      products: '='
    }, link: function(scope) {
      scope.categoryFilter = [];
    }
  };
});
