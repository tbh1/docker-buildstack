angular.module('dashboard').controller('HomeController', function ($scope, $location, $log) {

  var vm = this;

  vm.buildTools = [
    {
      name: 'Jenkins',
      link: createExternalRoute('/jenkins'),
      icon: 'icon-jenkins.png',
    },
    {
      name: 'SonarQube',
      link: createExternalRoute('/sonar'),
      icon: 'icon-sonar.png',
    },
    {
      name: 'Artifactory',
      link: createExternalRoute('/artifactory'),
      icon: 'icon-artifactory.png',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/toxicblu',
      icon: 'icon-github.png',
    },
  ]

  function createExternalRoute (route) {
    return $location.protocol() + "://" + $location.host() + route;
  }

});
