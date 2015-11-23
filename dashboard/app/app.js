angular.module('dashboard', ['ui.router', 'ngMaterial'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'components/home/home.html',
        controller: 'HomeController as vmHome',
      })

      .state('logs', {
        url: 'logs',
        templateUrl: 'components/logs/logs.html',
        controller: 'LogsController as vmLogs',
      })

  });
