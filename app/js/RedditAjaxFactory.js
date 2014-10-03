angular
  .module('redditApp', [])
  .factory('RedditAjax', RedditAjax);

RedditAjax.$inject = ['$http'];

function RedditAjax($http) {
  return {
    getReddits: function(callback) {
      $http.jsonp('http://www.reddit.com/.json?jsonp=JSON_CALLBACK')
      .success(function(data) {
        callback(data);
      })
      .error(function(){
        callback({ errorMsg: "Oops, there was an error loading your list..." })
      });
    }
  };
}
