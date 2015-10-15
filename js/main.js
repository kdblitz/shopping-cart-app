app.controller( "ProductCtrl", function ($scope, ProductService) {
  $scope.showSpecialOffers = true;
  $scope.categoryFilter = [];
  $scope.products = ProductService;

  $scope.toggleDescription = function(product) {
    if (product.shortDescription) {
      product.limit = 999
      product.actions = "Less..."
    } else {
      product.limit = 200
      product.actions = "More..."
    }
    product.shortDescription = !product.shortDescription
  }

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
  }

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

app.directive('sortButton',function() {
  return {
    restrict: 'E',
    template: ""
  }
})

app.directive('toolbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'toolbar.html',
    replace:true
  }
})

app.filter('filterByTags',function() {
  return function(items,categoryFilter) {
    var filteredItems = []
    _.forEach(items,function(product) {
      var matches = true;
      categoryFilter.forEach(function(category) {
        matches = matches && (product.categories.indexOf(category) > -1)
      })
      if (matches)
        filteredItems.push(product)
    })
    return filteredItems
  }
})
