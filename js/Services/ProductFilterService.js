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


  var toggleCategoryFilter = function(category) {

  };

  return {
    sortOptions: sortOptions,
    toggleCategoryFilter: toggleCategoryFilter
  };
});
