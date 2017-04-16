angular.module('video-player')

.controller('SearchController', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
})

.directive('search', function() {
  return {
    scope: {
      service: '<',
      result: '<'
    },
    restrict: 'E',
    controller: 'SearchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
