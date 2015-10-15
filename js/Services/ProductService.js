app.factory('ProductService', function() {
  var product = [
  {
    imageUrl: "http://lorempixel.com/280/200/sports/1",
    name: "Product A",
    description:"Product description... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 499,
    shortDescription: true,
    limit: 200,
    actions: "More...",
    editMode: false,
    categories: ["Electronics", "Cellphone"],
    specialOffer:false,
    addedToCart: false
  },
  {
    imageUrl: "http://lorempixel.com/280/200/sports/1",
    name: "Product B",
    description:"Product description... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 99,
    shortDescription: true,
    limit: 200,
    actions: "More...",
    editMode: false,
    categories: ["Electronics", "Tablet"],
    specialOffer:false,
    addedToCart: false
  },
    {
    imageUrl: "http://lorempixel.com/lorempixel/280/200",
    name: "Special Product A",
    description:"Product description... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 499,
    shortDescription: true,
    limit: 200,
    actions: "More...",
    editMode: false,
    categories: ["Electronics", "Cellphone"],
    specialOffer:true,
    addedToCart: false
  },
  {
    imageUrl: "http://lorempixel.com/lorempixel/280/200",
    name: "Special Product B",
    description:"Product description... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 99,
    shortDescription: true,
    limit: 200,
    actions: "More...",
    editMode: false,
    categories: ["Electronics", "Tablet"],
    specialOffer:true,
    addedToCart: false
  }]
  return product;
})
