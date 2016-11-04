(function (){
  'use strict';
  angular
  .module('app.core')
  .config(appRun);

  appRun.$inject = ['$urlRouterProvider'];
  function appRun($urlRouterProvider) {
   // $urlRouterProvider.otherwise('/dashboard');
  }

})();
