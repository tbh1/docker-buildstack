angular.module('dashboard').controller('HomeController', function ($scope, $location, $log) {

  var vm = $scope.vmHome = this;

  vm.internalLinks = [
    {
      name: 'Jenkins',
      link: createExternalRoute('/jenkins'),
      icon: 'icon-jenkins.png'
    },
    {
      name: 'SonarQube',
      link: createExternalRoute('/sonar'),
      icon: 'icon-sonar.png'
    },
    {
      name: 'Artifactory',
      link: createExternalRoute('/artifactory'),
      icon: 'icon-artifactory.png'
    }
  ];

  vm.externalLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/toxicblu',
      icon: 'icon-github.png'
    },
    {
      name: 'Docker Hub',
      link: 'https://hub.docker.com',
      icon: 'icon-docker.png'
    }
  ];

  function createExternalRoute (route) {
    $log.info("Creating external route for " + route);
    return $location.protocol() + "://" + $location.host() + route;
  }

});
