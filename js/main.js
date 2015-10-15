app.controller( "ProductCtrl", function ($scope, ProductService) {
  $scope.showSpecialOffers = true;
  $scope.categoryFilter = [];
  $scope.products = ProductService;

  $scope.sortOptions= [
    {
      name: "name",
      desc: false,
      label: "Name ascending"
    },
    {
      name: "name",
      desc: true,
      label: "Name descending"
    },
    {
      name: "price",
      desc: false,
      label: "Price ascending"
    },
    {
      name: "price",
      desc: true,
      label: "Price descending"
    }
  ]

  $scope.currentSortOption = $scope.sortOptions[0];

  $scope.sortBy = function(key) {
    var currentOption = _.indexOf($scope.sortOptions,$scope.currentSortOption)
    var chosenOption = _.findIndex($scope.sortOptions,function(option) {
      return option.name === key;
    });

    if (currentOption === chosenOption)
      chosenOption++;

    $scope.currentSortOption = $scope.sortOptions[chosenOption]
  };

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
