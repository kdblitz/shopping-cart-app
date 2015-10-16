app.factory('MusicTracksService', function($http) {
  function getTrackList() {
    return $http.get('http://127.0.0.1:8080/data/itunes.json')
  };

  return {
    getTrackList: getTrackList
  };
});
