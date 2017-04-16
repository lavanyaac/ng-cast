angular.module('video-player')

.controller('AppCtrl', function(youTube) {
  this.searchService = youTube;
  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };
  // this.videos = window.exampleVideoData;
  // this.currentVideo = this.video;
  this.setCurrentVideo = (video) => {
    this.currentVideo = video;
  };
  youTube.search('javascript tutorial', this.searchResults);
})

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };

});
