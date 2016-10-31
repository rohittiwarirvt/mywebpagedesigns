(function (){
  'use strict';
  angular
  .module('app.dashboard')
  .config(appRun);

  appRun.$inject = ['$stateProvider'];
  function appRun($stateProvider) {
    $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'tpl/dashboard.html',
      Controller: 'Dashboard',
      ControllerAs: 'db'
      });
  }

})();
