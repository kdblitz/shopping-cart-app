app.directive('product',function() {
  return {

    restrict: 'E',
    scope: {
      product:'='
    },
    templateUrl: 'js/Directives/product.html',
    link: function(scope) {
      descriptionViewModes = [
        {
          textLimit: 200,
          action: "More..."
        }, {
          textLimit: 99999,
          action: "Less..."
        }
      ];

      scope.currentViewMode = {
        description: descriptionViewModes[0],
        editMode: false
      };

      scope.toggleDescription = function(product) {
        idx = _.findIndex(descriptionViewModes, function(view) {
          return JSON.stringify(view) == JSON.stringify(scope.currentViewMode.description);
        });
        scope.currentViewMode.description = descriptionViewModes[(idx + 1) % descriptionViewModes.length];
      }

    }
  }
});