(function (){
  'use strict';
  angular
  .module('app.core')
  .config(appRun);

  appRun.$inject = ['$stateProvider'];
  function appRun($stateProvider) {
    $stateProvider.otherwise('/dashboard');
  }

})();
