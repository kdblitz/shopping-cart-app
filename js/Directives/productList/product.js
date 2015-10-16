app.directive('product',function() {
  return {

    restrict: 'E',
    scope: {
      product:'='
    },
    templateUrl: 'js/Directives/productList/product.html',
    controller: function($scope, ProductService) {
      var descriptionViewModeIdx = 0;

      $scope.currentViewMode = {
        descriptionViewMode: ProductService.descriptionViewModes[descriptionViewModeIdx],
        editMode: false
      };

      $scope.getProductDescription = function() {
        return ProductService.showProductDescription(
          $scope.product.description, $scope.currentViewMode.descriptionViewMode.limit);
      };

      $scope.getProductDescription();

      $scope.toggleDescription = function() {
        descriptionViewModeIdx = (descriptionViewModeIdx + 1) % 2;
        $scope.currentViewMode.descriptionViewMode = ProductService.descriptionViewModes[descriptionViewModeIdx];
      };

    }
  }
});
