app.factory('ConversionService', function($http, $q, $filter) {
  var availableConversions = [
    'USD','EUR','PHP'
  ];

  function getAvailableConversions() {
    return availableConversions;
  }

  var activeRate = {
    from:'USD',
    to:'USD',
    rate:1
  }

  function getActiveRate() {
    return activeRate;
  }

  function changeRate(from, to) {
    if (from === to) {
      activeRate = {
        from: from,
        to: to,
        rate: 1
      }
      return $q.when(activeRate);
    }

    return $http.get('http://api.fixer.io/latest?base='+from).then(function(res) {
      activeRate = {
        from:from,
        to:to,
        rate:res.data.rates[to]
      }
      return activeRate;
    });
  }

  function getConvertedRate(rate) {
    return $filter('currency')(rate * activeRate.rate, activeRate.to);
  }

  return {
    getAvailableConversions: getAvailableConversions,
    getActiveRate: getActiveRate,
    changeRate: changeRate,
    getConvertedRate: getConvertedRate
  };
})
