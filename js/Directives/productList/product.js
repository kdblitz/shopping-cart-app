app.directive('product',function() {
  return {

    restrict: 'E',
    scope: {
      product:'='
    },
    templateUrl: 'js/Directives/productList/product.html',
    controller: function($scope, ProductService) {
      $scope.currentViewMode = {
        descriptionViewMode: 'More',
        editMode: false
      };

      $scope.getProductDescription = function() {
        var limit = ($scope.currentViewMode.descriptionViewMode === 'More') ? 200 : null;
        return ProductService.showProductDescription( $scope.product.description, limit);
      };

      $scope.toggleDescription = function() {
        $scope.currentViewMode.descriptionViewMode =
          ($scope.currentViewMode.descriptionViewMode === 'More')? 'Less' : 'More';
      };

    }
  }
});
