angular
  .module('redditApp')
  .controller('redditCtrl', redditCtrl);

redditCtrl.$inject = ['RedditAjax'];

function redditCtrl(RedditAjax) {
  var vm = this;

  RedditAjax.getReddits(function(reddit) {
    vm.reddit = reddit;
    // vm.reddit = reddit.data.children;
  });
}



