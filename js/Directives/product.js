app.directive('product',function() {
  return {
    restrict: 'E',
    scope: {
      product:'='
    },
    templateUrl: 'js/Directives/productTemplate.html'
  }
});
