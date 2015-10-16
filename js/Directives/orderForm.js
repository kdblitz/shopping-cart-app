app.directive('orderForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/orderForm.html',
    scope: {

    }, link: function(scope) {
      scope.formData = {
        name:'',
        street:'',
        postcode:'',
        city:''
      };
    }
  }
});
