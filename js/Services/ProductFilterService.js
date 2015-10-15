app.factory('ProductFilterService', function($filter) {
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

  return {
    sortOptions: sortOptions,
    getCategories: getCategories,
    toggleCategoryFilter: toggleCategoryFilter
  };
});
