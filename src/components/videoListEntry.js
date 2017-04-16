angular.module('video-player')
  .directive('videoListEntry', function() {
    return {
      // TODO
      templateUrl: 'src/templates/videoListEntry.html',
      scope: {
        video: '<',
        onClick: '<'
      },
      restrict: 'E',
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function() {}

    };
  });
