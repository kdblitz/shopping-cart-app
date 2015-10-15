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
});
