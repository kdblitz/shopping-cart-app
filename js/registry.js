var app = angular.module('ShoppingApp',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/catalog', {
    template:'<product-list filter-options="filterOptions" products="products"></product-list>'
  })
  .when('/orderForm', {
    template:'<order-form></order-form>'
  })
  .otherwise({
    redirectTo: '/catalog'
  })
});
