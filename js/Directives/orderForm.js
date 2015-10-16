app.directive('orderForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/orderForm.html',
    scope: {
      // gh: '='
    },
    controllerAs: 'vm',
    bindToController: true,
    controller: function ($scope) {

      $scope.formData = {
        name:'',
        street:'',
        postcode:'',
        city:''
      };

      // $scope.vm === this;
      // this.gh ==
      // $scope.vm.gh
      // this.formData = {
      //
      // };
    }
  }
});
