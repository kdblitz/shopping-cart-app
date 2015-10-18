app.directive('rateConversionOptions', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'js/Directives/filterBar/rateConversionOptions.html',
    controllerAs:'vm',
    bindToController: true,
    scope: {},
    controller: function($scope, ConversionService) {
      this.loading = false;
      this.availableConversions = ConversionService.getAvailableConversions();
      this.activeRate = ConversionService.getActiveRate();
      this.changeRate = function(to) {
        this.loading = true;
        ConversionService.changeRate('USD', to).then(function(rate) {
          // TODO: ask issue here
          // this.activeRate = rate;
          $scope.vm.activeRate = rate;
          $scope.vm.loading = false;
        });
      };

      ConversionService.startMonitoring();
    }
  }
})
