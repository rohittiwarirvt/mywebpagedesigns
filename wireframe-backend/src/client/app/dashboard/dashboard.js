(function(){
  'use strict';

  angular
  .module('app.dashboard')
  .controller('Dashboard', Dashboard);

  function Dashboard() {
    var dashboardVm = this;
    dashboardVm.mytitle = "Gmail";
  }
})();
