angular.module('video-player')

.directive('videoList', function() {
  return {
    templateUrl: 'src/templates/videoList.html',
    scope: {
      videos: '<',
      onClick: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {}
  };
});
