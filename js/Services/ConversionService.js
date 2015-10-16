app.factory('ConversionService', function($http, $filter) {
  var activeRate = {
    from:'USD',
    to:'USD',
    rate:1
  }

  function getActiveRate() {
    return activeRate;
  }

  function changeRate(from, to) {
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
    console.log(activeRate.rate);
    return $filter('currency')(rate * activeRate.rate, activeRate.to);
  }

  return {
    getActiveRate: getActiveRate,
    changeRate: changeRate,
    getConvertedRate: getConvertedRate
  };
})
