(function(){
  'use strict';

  angular
  .module('app.dashboard')
  .controller('Header', Header);

  function Header() {
    var dashboardVm = this;
    dashboardVm.mytitle = "Gmail";
  }
})();
