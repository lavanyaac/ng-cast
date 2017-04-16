angular.module('video-player')
  .controller('VideoPlayerUrl', function() {
    this.videoURL = () => {
      return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
    };
  })

.directive('videoPlayer', function() {
  return {

    templateUrl: 'src/templates/videoPlayer.html',
    scope: {
      video: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'VideoPlayerUrl'

  };
});
