app.factory('ConversionService', function($http, $q, $filter, $timeout) {
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

  var monitorRate = null;
  function startMonitoring() {
    changeRate(activeRate.from, activeRate.to)
    monitorRate = $timeout(startMonitoring, 5000);
  }

  function stopMonitoring() {
    monitorRate();
    monitorRate = null;
  }

  function changeRate(from, to) {
    if (from === to) {
      activeRate = {
        from: from,
        to: to,
        rate: 1
      }
      return $q.when(activeRate);
    } else {
      return $http.get('http://api.fixer.io/latest?base='+from).then(function(res) {
        activeRate = {
          from:from,
          to:to,
          rate:res.data.rates[to]
        }
        return activeRate;
      });
    }
  }

  function getConvertedRate(rate) {
    return $filter('currency')(rate * activeRate.rate, activeRate.to);
  }

  return {
    startMonitoring: startMonitoring,
    stopMonitoring: stopMonitoring,
    getAvailableConversions: getAvailableConversions,
    getActiveRate: getActiveRate,
    changeRate: changeRate,
    getConvertedRate: getConvertedRate
  };
})
