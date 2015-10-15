'use strict';

app.directive('shoppingCartApp', function() {
  return {
    restrict: 'E',
    controller: function($scope, ProductService) {
      $scope.products = ProductService.getProducts();
    },
    templateUrl: 'js/Directives/shoppingCartApp.html'
  };
});
