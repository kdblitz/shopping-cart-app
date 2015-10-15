app.directive('productList', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/productList.html',
    scope: {
      products: '='
    }, link: function(scope) {
      scope.showSpecialOffers = true;
      scope.categoryFilter = [];
    }
  };
});
