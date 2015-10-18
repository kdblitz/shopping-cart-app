app.factory('ProductFilterService', function($filter, $q) {
  var sortOptions= [
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
  ];

  var filterProductByQuery = function(products, query) {
    return $q.when($filter('filter')(products,query));
  }

  var getCategories = function(products) {
    var categories = [];
    _.forEach( products, function(product){
      categories = _.union(categories,product.categories);
    });
    return categories;
  }

  var toggleCategoryFilter = function(currentCategoryFilters, category) {
    var index = currentCategoryFilters.indexOf(category);
    if ( index !== -1) {
      currentCategoryFilters.splice(index, 1);
    } else {
      currentCategoryFilters.push(category);
    }
  }

  var filterProductByCategory = function(products, categories) {
    return $q.when($filter('filterByTags')(products, categories));
  }

  return {
    sortOptions: sortOptions,
    filterProductByQuery: filterProductByQuery,
    filterProductByCategory: filterProductByCategory,
    getCategories: getCategories,
    toggleCategoryFilter: toggleCategoryFilter
  };
});
