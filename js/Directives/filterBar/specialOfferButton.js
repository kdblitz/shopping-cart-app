app.directive('specialOfferButton', function() {
  return {
    replace: true,
    restrict:'E',
    templateUrl: 'js/Directives/filterBar/specialOfferButton.html',
    scope: {
      'showSpecialOffers':'='
    }, link: function(scope) {
      scope.toggleSpecialOffers = function() {
        scope.showSpecialOffers = !scope.showSpecialOffers;
      }
    }
  };
});
