app.directive('rateConversionOptions', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'js/Directives/filterBar/rateConversionOptions.html',
    controllerAs:'vm',
    bindToController: true,
    scope: {},
    controller: function($scope, ConversionService) {
      this.availableConversions = ConversionService.getAvailableConversions();
      this.activeRate = ConversionService.getActiveRate();
      this.changeRate = function(to) {
        ConversionService.changeRate('USD', to).then(function(rate) {
          // TODO: ask issue here
          $scope.vm.activeRate = rate;
        });
      };

      ConversionService.startMonitoring();
    }
  }
})
