app.controller( "ProductCtrl", function ($scope, ProductService) {
  $scope.getCategories = function() {
    var categories = []
    _.forEach( $scope.products, function(product){
      categories = _.union(categories,product.categories)
    })
    return categories
  }

  $scope.toggleCategoryFilter = function(category) {
    var index = $scope.categoryFilter.indexOf(category)
    if ( index !== -1) {
      $scope.categoryFilter.splice(index, 1)
    } else {
      $scope.categoryFilter.push(category)
    }
  }
})
